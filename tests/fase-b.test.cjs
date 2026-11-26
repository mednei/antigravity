const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

// Simulações sem navegador, rede ou projeto Supabase real.
// Executar manualmente: node --test tests/fase-b.test.cjs
class Element {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.children = [];
    this.attributes = {};
    this.handlers = {};
    this.className = '';
    this.value = '';
    this.hidden = false;
    this.disabled = false;
    this._text = '';
  }
  set textContent(value) { this._text = String(value); this.children = []; }
  get textContent() { return this._text + this.children.map(child => child.textContent).join(' '); }
  appendChild(child) { this.children.push(child); return child; }
  replaceChildren(...children) { this._text = ''; this.children = [...children]; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  addEventListener(name, callback) { this.handlers[name] = callback; }
  focus() { this.focused = true; }
  fire(name) { return this.handlers[name] && this.handlers[name]({ preventDefault() {} }); }
}

function find(root, predicate) {
  if (predicate(root)) return root;
  for (const child of root.children) { const match = find(child, predicate); if (match) return match; }
  return null;
}
const tag = (root, name) => find(root, node => node.tagName === name.toUpperCase());
const button = (root, text) => find(root, node => node.tagName === 'BUTTON' && node.textContent === text);
const notice = root => find(root, node => node.attributes.role === 'alert');
const tick = async () => { for (let i = 0; i < 8; i++) await new Promise(resolve => setImmediate(resolve)); };

function row(overrides = {}) {
  return {
    id: 'nota-de-teste', aluno_id: 'conta-a', aula_index: 0,
    texto: 'Observação de teste', print_url: null,
    criado_em: '2026-01-01T12:00:00Z', atualizado_em: '2026-01-01T12:00:00Z',
    ...overrides
  };
}

function database(initialRows = [], options = {}) {
  const state = { rows: [...initialRows], calls: [], pending: [], readError: options.readError, writeError: options.writeError };
  const client = { from(table) {
    const call = { table, kind: null, filters: [], orders: [] };
    const query = {
      select(columns) { if (!call.kind) call.kind = 'select'; call.columns = columns; return query; },
      insert(values) { call.kind = 'insert'; call.values = values; return query; },
      update(values) { call.kind = 'update'; call.values = values; return query; },
      delete() { call.kind = 'delete'; return query; },
      eq(column, value) { call.filters.push([column, value]); return query; },
      order(column, value) { call.orders.push([column, value]); return query; },
      single() { call.single = true; return query; },
      maybeSingle() { call.single = true; return query; },
      then(resolve, reject) {
        state.calls.push(call);
        if (options.deferReads && call.kind === 'select') {
          return new Promise(done => state.pending.push(done)).then(resolve, reject);
        }
        return Promise.resolve().then(() => {
          const error = call.kind === 'select' ? state.readError : state.writeError;
          if (error) return { data: null, error };
          const matches = value => call.filters.every(([key, expected]) => value[key] === expected);
          if (call.kind === 'select') {
            const result = state.rows.filter(matches).sort((a, b) => new Date(b.criado_em) - new Date(a.criado_em));
            return { data: result, error: null };
          }
          if (call.kind === 'insert') {
            const value = row({ ...call.values, id: `nova-nota-${state.rows.length}`, criado_em: new Date().toISOString() });
            state.rows.push(value);
            return { data: value, error: null };
          }
          const value = state.rows.find(matches);
          if (!value) return { data: null, error: null };
          if (call.kind === 'update') Object.assign(value, call.values);
          if (call.kind === 'delete') state.rows = state.rows.filter(item => item !== value);
          return { data: value, error: null };
        }).then(resolve, reject);
      }
    };
    return query;
  } };
  return { client, state };
}

function environment(options = {}) {
  const db = database(options.rows, options);
  const state = { user: options.guest ? null : { id: 'conta-a' }, client: options.unconfigured ? null : db.client, confirm: true, confirmations: [] };
  const document = { createElement: name => new Element(name), addEventListener() {} };
  const sandbox = {
    document, URL, localStorage: { getItem: () => null },
    AntigravityAuth: { getState: () => state },
    confirm(message) { state.confirmations.push(message); return state.confirm; }
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync('assets/js/course.js', 'utf8') + '\nglobalThis.notes = lessonNotes;', sandbox);
  const root = new Element('section');
  const render = index => sandbox.notes.render(root, index);
  return { db, state, root, render };
}

function fill(root, text = '', url = '') {
  const textField = tag(root, 'textarea');
  const urlField = tag(root, 'input');
  textField.value = text; textField.fire('input');
  urlField.value = url; urlField.fire('input');
}
const submit = root => tag(root, 'form').fire('submit');

test('deslogado ou sem client mostra convite relativo e não consulta anotações', () => {
  for (const options of [{ guest: true }, { unconfigured: true }]) {
    const env = environment(options); env.render(0);
    assert.match(env.root.textContent, /Entre para salvar suas anotações/);
    assert.equal(tag(env.root, 'a').href, './login.html');
    assert.equal(tag(env.root, 'form'), null);
    assert.equal(env.db.state.calls.length, 0);
  }
});

test('lista da aula usa filtros da conta e data mais recente primeiro', async () => {
  const env = environment({ rows: [row(), row({ id: 'outra-aula', aula_index: 1 }), row({ id: 'outra-conta', aluno_id: 'conta-b' }), row({ id: 'recente', texto: 'Mais recente', criado_em: '2026-02-01T12:00:00Z' })] });
  env.render(0); await tick();
  const cards = find(env.root, node => node.className === 'lesson-notes-list').children;
  assert.equal(cards.length, 2);
  assert.match(cards[0].textContent, /Mais recente/);
  assert.deepEqual(env.db.state.calls[0].filters, [['aluno_id','conta-a'], ['aula_index',0]]);
  assert.equal(env.db.state.calls[0].orders[0][0], 'criado_em');
  assert.equal(env.db.state.calls[0].orders[0][1].ascending, false);
});

test('salvar texto faz insert com conta e aula e mostra sucesso', async () => {
  const env = environment(); env.render(7); await tick();
  fill(env.root, '  Observação da aula 08  ');
  await submit(env.root);
  const call = env.db.state.calls.find(value => value.kind === 'insert');
  assert.equal(call.values.aluno_id, 'conta-a');
  assert.equal(call.values.aula_index, 7);
  assert.equal(call.values.texto, 'Observação da aula 08');
  assert.equal(call.values.print_url, null);
  assert.ok(call.values.atualizado_em);
  assert.equal(notice(env.root).textContent, 'Anotação salva.');
  assert.equal(tag(env.root, 'textarea').value, '');
  assert.match(env.root.textContent, /Observação da aula 08/);
});

test('print sem texto é permitido e gera imagem com alt e referrer protegido', async () => {
  const env = environment(); env.render(0); await tick();
  fill(env.root, '', 'https://example.invalid/print.png');
  await submit(env.root);
  const image = tag(env.root, 'img');
  assert.equal(image.src, 'https://example.invalid/print.png');
  assert.match(image.alt, /Print.*Aula 01/);
  assert.equal(image.referrerPolicy, 'no-referrer');
  assert.equal(image.loading, 'lazy');
  image.fire('error');
  assert.equal(image.hidden, true);
  assert.match(env.root.textContent, /Não foi possível carregar o print/);
});

test('editar atualiza a linha própria e a data, sem criar uma segunda anotação', async () => {
  const env = environment({ rows: [row()] }); env.render(0); await tick();
  button(env.root, 'Editar').fire('click');
  assert.equal(tag(env.root, 'textarea').value, 'Observação de teste');
  fill(env.root, 'Texto atualizado'); await submit(env.root);
  const call = env.db.state.calls.find(value => value.kind === 'update');
  assert.deepEqual(call.filters, [['id','nota-de-teste'], ['aluno_id','conta-a'], ['aula_index',0]]);
  assert.ok(call.values.atualizado_em);
  assert.equal(env.db.state.rows.length, 1);
  assert.equal(env.db.state.rows[0].texto, 'Texto atualizado');
  assert.equal(notice(env.root).textContent, 'Anotação atualizada.');
});

test('excluir exige confirmação e filtra id, aluno e aula', async () => {
  const env = environment({ rows: [row()] }); env.render(0); await tick();
  env.state.confirm = false;
  await button(env.root, 'Excluir').fire('click');
  assert.equal(env.db.state.calls.filter(value => value.kind === 'delete').length, 0);
  env.state.confirm = true;
  await button(env.root, 'Excluir').fire('click');
  const call = env.db.state.calls.find(value => value.kind === 'delete');
  assert.deepEqual(call.filters, [['id','nota-de-teste'], ['aluno_id','conta-a'], ['aula_index',0]]);
  assert.equal(env.db.state.rows.length, 0);
  assert.equal(notice(env.root).textContent, 'Anotação excluída.');
});

test('anotação vazia e URLs não HTTP(S) não chegam ao banco', async () => {
  const env = environment(); env.render(0); await tick();
  await submit(env.root);
  assert.match(notice(env.root).textContent, /Escreva uma observação/);
  for (const url of ['javascript:alert(1)', 'data:image/svg+xml,<svg/>', 'https://usuario:senha@example.invalid/print.png']) {
    fill(env.root, 'Texto', url); await submit(env.root);
    assert.match(notice(env.root).textContent, /URL de imagem HTTP ou HTTPS válida/);
  }
  assert.equal(env.db.state.calls.filter(value => value.kind === 'insert').length, 0);
});

test('texto de anotação é exibido como texto, sem inserir marcação HTML', async () => {
  const env = environment({ rows: [row({ texto: '<img src=x onerror=alert(1)>', print_url: 'javascript:alert(1)' })] });
  env.render(0); await tick();
  assert.equal(find(env.root, node => node.className === 'lesson-note-text').textContent, '<img src=x onerror=alert(1)>');
  assert.equal(tag(env.root, 'img'), null);
});

test('erro de rede preserva o rascunho e permite tentar novamente', async () => {
  const env = environment({ writeError: new Error('offline') }); env.render(0); await tick();
  fill(env.root, 'Rascunho que deve permanecer'); await submit(env.root);
  assert.match(notice(env.root).textContent, /Não foi possível salvar/);
  assert.equal(tag(env.root, 'textarea').value, 'Rascunho que deve permanecer');
  env.db.state.writeError = null;
  await submit(env.root);
  assert.equal(notice(env.root).textContent, 'Anotação salva.');
});

test('falha de leitura exibe feedback e oferece nova tentativa', async () => {
  const env = environment({ readError: new Error('offline') }); env.render(0); await tick();
  assert.match(notice(env.root).textContent, /Não foi possível carregar/);
  env.db.state.readError = null;
  await button(env.root, 'Tentar carregar novamente').fire('click');
  assert.match(env.root.textContent, /Você ainda não tem anotações/);
});

test('redesenhar o painel e trocar aulas preserva rascunho na aula correta', async () => {
  const env = environment(); env.render(0); await tick();
  fill(env.root, 'Rascunho da aula 01');
  env.render(0);
  assert.equal(tag(env.root, 'textarea').value, 'Rascunho da aula 01');
  env.render(1); await tick();
  assert.equal(tag(env.root, 'textarea').value, '');
  env.render(0); await tick();
  assert.equal(tag(env.root, 'textarea').value, 'Rascunho da aula 01');
});

test('respostas atrasadas não entram na outra aula nem aparecem após logout', async () => {
  const env = environment({ deferReads: true });
  env.render(0); await tick();
  env.render(1); await tick();
  env.db.state.pending[0]({ data: [row()], error: null }); await tick();
  assert.doesNotMatch(env.root.textContent, /Observação de teste/);
  env.state.user = null;
  env.render(1);
  env.db.state.pending[1]({ data: [row({ aula_index: 1 })], error: null }); await tick();
  assert.match(env.root.textContent, /Entre para salvar/);
  assert.equal(tag(env.root, 'textarea'), null);
});
