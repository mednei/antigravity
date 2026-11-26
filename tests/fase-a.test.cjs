const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const read = path => fs.readFileSync(path, 'utf8');
const progressKey = 'antigravity-lab-progress-v1';
const tick = async () => { for (let i = 0; i < 12; i++) await new Promise(resolve => setImmediate(resolve)); };

function node(extra = {}) {
  const attributes = {};
  const classes = new Set();
  return {
    style: {}, textContent: '', innerHTML: '', value: '', disabled: false, hidden: false,
    addEventListener(type, handler) { this[type] = handler; },
    setAttribute(name, value) { attributes[name] = value; },
    getAttribute(name) { return attributes[name] || null; },
    removeAttribute(name) { delete attributes[name]; },
    classList: { add: value => classes.add(value), remove: value => classes.delete(value) },
    querySelector() { return null; },
    reportValidity() { return true; },
    focus() { this.focused = true; },
    ...extra
  };
}

function environment(initialStorage = {}, options = {}) {
  const storage = new Map(Object.entries(initialStorage));
  const writes = [];
  const events = [];
  const nodes = Object.fromEntries([
    'lesson-list', 'lesson-detail', 'progress-label', 'progress-percent', 'progress-bar', 'progress-sync-status'
  ].map(id => [id, node()]));
  const doc = {
    getElementById: id => nodes[id] || null,
    querySelector: selector => selector === '.progress-track' ? node() : null,
    querySelectorAll: () => [],
    addEventListener: (type, handler) => { if (type === 'DOMContentLoaded') events.push(handler); },
    createElement: () => ({ remove() {} }),
    head: { appendChild() { throw new Error('CDN inesperado no teste'); } }
  };
  const sandbox = {
    document: doc,
    localStorage: {
      getItem(key) { if (options.storageBlocked) throw new Error('blocked'); return storage.get(key) ?? null; },
      setItem(key, value) {
        if (options.storageBlocked) throw new Error('blocked');
        storage.set(key, value); writes.push([key, value]);
      }
    },
    URL, AbortController, atob,
    fetch: () => { throw new Error('Rede real proibida nos testes'); },
    setTimeout, clearTimeout,
    location: { href: 'https://example.invalid/antigravity/login.html', assign(url) { this.assigned = url; } },
    matchMedia: () => ({ matches: false })
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  return { sandbox, nodes, doc, storage, writes, events,
    run(file, suffix = '') { vm.runInContext(read(file) + suffix, sandbox, { filename: file }); },
    start() { events.forEach(handler => handler()); }
  };
}

function fakeAuth(initialUser = null, client = null) {
  let state = { user: initialUser, client };
  const subscribers = [];
  return {
    ready: Promise.resolve(state), getState: () => state,
    subscribe(fn) { subscribers.push(fn); },
    change(user) { state = { ...state, user }; subscribers.forEach(fn => fn(state)); }
  };
}

function fakeDatabase(rows = [], options = {}) {
  const calls = [];
  let finishSelect;
  let finishWrite;
  const selection = options.deferSelect ? new Promise(resolve => { finishSelect = resolve; }) : null;
  const writing = options.deferWrite ? new Promise(resolve => { finishWrite = resolve; }) : null;
  const client = { from(table) {
    const call = { table, filters: [] };
    const query = {
      select(columns) { call.kind = 'select'; call.columns = columns; return query; },
      upsert(value, args) { call.kind = 'upsert'; call.value = value; call.args = args; return query; },
      delete() { call.kind = 'delete'; return query; },
      eq(column, value) { call.filters.push([column, value]); return query; },
      then(resolve, reject) {
        calls.push(call);
        if (call.kind === 'select') {
          return (selection || Promise.resolve({ data: rows, error: options.readError || null })).then(resolve, reject);
        }
        return (writing || Promise.resolve({ error: options.writeError || null })).then(resolve, reject);
      }
    };
    return query;
  } };
  return { client, calls, finishSelect: value => finishSelect(value), finishWrite: value => finishWrite(value) };
}

function clickLesson(env, index) {
  env.nodes['lesson-list'].click({ target: { closest: () => ({ dataset: { lesson: String(index) } }) } });
}
function toggle(env) {
  env.nodes['lesson-detail'].click({ target: { closest: selector => selector === '#complete-button' ? {} : null } });
}
function progress(env) { return JSON.parse(env.storage.get(progressKey)); }

test('as oito aulas e a chave originais são preservadas', () => {
  const before = execFileSync('git', ['show', '15c1a66:assets/js/course.js'], { encoding: 'utf8' });
  const lessons = text => text.slice(text.indexOf('const lessons = ['), text.indexOf(`const storageKey = '${progressKey}';`)).trim();
  assert.equal(lessons(read('assets/js/course.js')), lessons(before));
  assert.match(read('docs/supabase/fase-a-schema.sql'), /between 0 and 7/);
  assert.equal((read('docs/supabase/fase-a-schema.sql').match(/create policy /g) || []).length, 4);
});

test('sem configuração não carrega CDN e mantém o estudo local', async () => {
  const env = environment({ [progressKey]: '[0,7]' });
  env.run('assets/js/supabase-client.js'); env.run('assets/js/auth.js'); env.run('assets/js/course.js');
  env.start(); await tick();
  assert.equal(await env.sandbox.AntigravitySupabase.ready, null);
  assert.equal(await env.sandbox.AntigravityAuth.obterUsuarioAtual(), null);
  assert.equal(env.nodes['progress-label'].textContent, '2 de 8 aulas concluídas');
  clickLesson(env, 6); toggle(env);
  assert.deepEqual(progress(env), [0,7,6]);
});

test('biblioteca ausente falha sem impedir o dashboard', async () => {
  const env = environment({ [progressKey]: '[2]' });
  env.doc.head.appendChild = script => script.onerror();
  vm.runInContext(read('assets/js/supabase-client.js').replace("url: ''", "url: 'https://example.invalid'").replace("anonKey: ''", "anonKey: 'sb_publishable_test'"), env.sandbox);
  env.run('assets/js/auth.js'); env.run('assets/js/course.js'); env.start(); await tick();
  assert.equal(await env.sandbox.AntigravitySupabase.ready, null);
  toggle(env);
  assert.deepEqual(progress(env), [2,0]);
});

test('rejeita service_role e chaves secretas antes de carregar biblioteca', async () => {
  for (const key of ['sb_secret_test', `header.${Buffer.from(JSON.stringify({ role: 'service_role' })).toString('base64url')}.signature`]) {
    const env = environment();
    vm.runInContext(read('assets/js/supabase-client.js').replace("url: ''", "url: 'https://example.invalid'").replace("anonKey: ''", `anonKey: '${key}'`), env.sandbox);
    assert.equal(await env.sandbox.AntigravitySupabase.ready, null);
    assert.ok(env.sandbox.AntigravitySupabase.getState().error);
  }
});

test('sem login marca e desmarca mesmo com localStorage bloqueado', async () => {
  const env = environment({}, { storageBlocked: true });
  env.run('assets/js/course.js'); env.start();
  toggle(env);
  assert.equal(env.nodes['progress-label'].textContent, '1 de 8 aulas concluídas');
  toggle(env);
  assert.equal(env.nodes['progress-label'].textContent, '0 de 8 aulas concluídas');
});

test('banco prevalece no carregamento; upsert e delete usam a identidade correta', async () => {
  const env = environment({ [progressKey]: '[0,1]' });
  const db = fakeDatabase([{ aula_index: 7 }]);
  env.sandbox.AntigravityAuth = fakeAuth({ id: 'conta-teste-a' }, db.client);
  env.run('assets/js/course.js'); env.start(); await tick();
  assert.deepEqual(progress(env), [7]);
  clickLesson(env, 6); toggle(env); await tick();
  const insert = db.calls.find(call => call.kind === 'upsert');
  assert.equal(insert.value.aluno_id, 'conta-teste-a');
  assert.equal(insert.value.aula_index, 6);
  assert.equal(insert.args.onConflict, 'aluno_id,aula_index');
  toggle(env); await tick();
  const remove = db.calls.find(call => call.kind === 'delete');
  assert.deepEqual(remove.filters, [['aluno_id','conta-teste-a'],['aula_index',6]]);
  assert.deepEqual(progress(env), [7]);
});

test('erros de leitura e escrita mantêm cache da conta e não misturam visitante', async () => {
  const env = environment({ [progressKey]: '[0,1]', [`${progressKey}:conta-teste-a`]: '[4]' });
  const db = fakeDatabase([], { readError: new Error('offline'), writeError: new Error('offline') });
  const auth = fakeAuth({ id: 'conta-teste-a' }, db.client);
  env.sandbox.AntigravityAuth = auth;
  env.run('assets/js/course.js'); env.start(); await tick();
  assert.deepEqual(progress(env), [4]);
  clickLesson(env, 5); toggle(env); await tick();
  assert.deepEqual(progress(env), [4,5]);
  assert.match(env.nodes['progress-sync-status'].textContent, /Não foi possível sincronizar/);
  auth.change(null); await tick();
  assert.deepEqual(progress(env), [0,1]);
});

test('clique durante leitura não é apagado pela resposta do servidor', async () => {
  const env = environment();
  const db = fakeDatabase([], { deferSelect: true });
  env.sandbox.AntigravityAuth = fakeAuth({ id: 'conta-teste-a' }, db.client);
  env.run('assets/js/course.js'); env.start(); await tick();
  clickLesson(env, 6); toggle(env);
  db.finishSelect({ data: [{ aula_index: 2 }], error: null }); await tick();
  assert.deepEqual(progress(env), [2,6]);
  assert.equal(db.calls.filter(call => call.kind === 'upsert').length, 1);
});

test('cliques rápidos gravam na ordem e uma conta não recebe resposta da anterior', async () => {
  const env = environment({ [progressKey]: '[1]' });
  const db = fakeDatabase([], { deferWrite: true });
  const auth = fakeAuth({ id: 'conta-teste-a' }, db.client);
  env.sandbox.AntigravityAuth = auth;
  env.run('assets/js/course.js'); env.start(); await tick();
  toggle(env); toggle(env); await tick();
  assert.equal(db.calls.filter(call => call.kind === 'upsert').length, 1);
  assert.equal(db.calls.filter(call => call.kind === 'delete').length, 0);
  db.finishWrite({ error: null }); await tick();
  assert.deepEqual(db.calls.filter(call => call.kind !== 'select').map(call => call.kind), ['upsert','delete']);
  auth.change(null); await tick();
  assert.deepEqual(progress(env), [1]);
});

test('resposta atrasada de uma conta não sobrescreve o visitante após logout', async () => {
  const env = environment({ [progressKey]: '[3]' });
  const db = fakeDatabase([], { deferSelect: true });
  const auth = fakeAuth({ id: 'conta-teste-a' }, db.client);
  env.sandbox.AntigravityAuth = auth;
  env.run('assets/js/course.js'); env.start(); await tick();
  auth.change(null);
  db.finishSelect({ data: [{ aula_index: 7 }], error: null }); await tick();
  assert.deepEqual(progress(env), [3]);
});

test('cadastro envia nome em metadata; confirmação de e-mail não inventa uma sessão', async () => {
  const env = environment();
  const calls = [];
  let callback;
  const client = { auth: {
    onAuthStateChange(fn) { callback = fn; },
    async getSession() { return { data: { session: null }, error: null }; },
    async signUp(args) { calls.push(args); return { data: { user: { id: 'conta-teste' }, session: null }, error: null }; },
    async signInWithPassword(args) { calls.push(args); return { data: { session: { user: { id: 'conta-teste' } } }, error: null }; },
    async signOut(args) { calls.push(args); callback('SIGNED_OUT', null); return { error: null }; }
  } };
  env.sandbox.AntigravitySupabase = { ready: Promise.resolve(client) };
  env.run('assets/js/auth.js'); env.start();
  await env.sandbox.AntigravityAuth.ready;
  const data = await env.sandbox.AntigravityAuth.cadastro('estudo@example.invalid', 'senha-de-teste', 'Estudante');
  assert.equal(calls[0].options.data.nome, 'Estudante');
  assert.equal(calls[0].options.emailRedirectTo, 'https://example.invalid/antigravity/login.html');
  assert.equal(data.session, null);
  assert.equal(await env.sandbox.AntigravityAuth.obterUsuarioAtual(), null);
  await env.sandbox.AntigravityAuth.login('estudo@example.invalid', 'senha-de-teste');
  assert.equal((await env.sandbox.AntigravityAuth.obterUsuarioAtual()).id, 'conta-teste');
  await env.sandbox.AntigravityAuth.logout();
  assert.equal(await env.sandbox.AntigravityAuth.obterUsuarioAtual(), null);
  assert.equal(calls.at(-1).scope, 'local');
});

function loginPage(options = {}) {
  const env = environment();
  ['auth-form','auth-feedback','auth-submit','auth-name-group','auth-name','auth-email','auth-password'].forEach(id => { env.nodes[id] = node(); });
  const tabs = ['login','cadastro'].map(mode => node({ dataset: { authMode: mode } }));
  env.doc.querySelectorAll = selector => selector === '[data-auth-mode]' ? tabs : [];
  let authChange;
  const client = { auth: {
    onAuthStateChange(fn) { authChange = fn; },
    async getSession() { return { data: { session: options.initialSession || null }, error: null }; },
    async signUp(args) {
      if (options.signUpError) throw options.signUpError;
      const user = { id: 'conta-de-teste', user_metadata: args.options.data };
      const session = options.confirmEmail ? null : { user };
      if (session) authChange('SIGNED_IN', session);
      return { data: { user, session }, error: null };
    },
    async signInWithPassword() {
      if (options.loginError) return { data: {}, error: options.loginError };
      const session = { user: { id: 'conta-de-teste' } };
      authChange('SIGNED_IN', session);
      return { data: { session }, error: null };
    }
  } };
  env.sandbox.AntigravitySupabase = { ready: Promise.resolve(client) };
  env.run('assets/js/auth.js'); env.start();
  return { ...env, tabs };
}

test('alternância do formulário, cadastro sem confirmação e redirecionamento', async () => {
  const env = loginPage(); await tick();
  assert.equal(env.nodes['auth-name-group'].hidden, true);
  env.tabs[1].click();
  assert.equal(env.nodes['auth-name-group'].hidden, false);
  assert.equal(env.nodes['auth-name'].required, true);
  assert.equal(env.nodes['auth-password'].autocomplete, 'new-password');
  env.nodes['auth-name'].value = 'Estudante';
  env.nodes['auth-email'].value = 'estudo@example.invalid';
  env.nodes['auth-password'].value = 'senha-de-teste';
  await env.nodes['auth-form'].submit({ preventDefault() {} });
  assert.equal(env.sandbox.location.assigned, './produtos.html');
  assert.equal(env.nodes['auth-password'].value, '');
});

test('cadastro com confirmação aguarda e-mail e não redireciona', async () => {
  const env = loginPage({ confirmEmail: true }); await tick();
  env.tabs[1].click();
  env.nodes['auth-name'].value = 'Estudante';
  env.nodes['auth-email'].value = 'estudo@example.invalid';
  env.nodes['auth-password'].value = 'senha-de-teste';
  await env.nodes['auth-form'].submit({ preventDefault() {} });
  assert.equal(env.sandbox.location.assigned, undefined);
  assert.match(env.nodes['auth-feedback'].textContent, /Confira seu e-mail/);
  assert.equal(env.nodes['auth-submit'].disabled, false);
});

test('erro de login aparece como texto acessível e permite nova tentativa', async () => {
  const env = loginPage({ loginError: { code: 'invalid_credentials' } }); await tick();
  env.nodes['auth-email'].value = 'estudo@example.invalid';
  env.nodes['auth-password'].value = 'senha-de-teste';
  await env.nodes['auth-form'].submit({ preventDefault() {} });
  assert.equal(env.sandbox.location.assigned, undefined);
  assert.equal(env.nodes['auth-feedback'].textContent, 'E-mail ou senha incorretos.');
  assert.equal(env.nodes['auth-submit'].disabled, false);
});

test('nome na navegação usa textContent e logout não navega para login', async () => {
  const env = environment();
  const label = node();
  const link = node({ querySelector: () => label });
  env.doc.querySelectorAll = selector => selector === '[data-auth-link]' ? [link] : [];
  let authChange;
  const client = { auth: {
    onAuthStateChange(fn) { authChange = fn; },
    async getSession() { return { data: { session: { user: { id: 'conta-de-teste', user_metadata: { nome: '<img> restante' } } } }, error: null }; },
    async signOut() { authChange('SIGNED_OUT', null); return { error: null }; }
  } };
  env.sandbox.AntigravitySupabase = { ready: Promise.resolve(client) };
  env.run('assets/js/auth.js'); env.start(); await new Promise(resolve => setTimeout(resolve, 5));
  assert.equal(label.textContent, '<img> · Sair');
  assert.equal(label.innerHTML, '');
  let prevented = false;
  await link.click({ preventDefault() { prevented = true; } });
  await new Promise(resolve => setTimeout(resolve, 5));
  assert.equal(prevented, true);
  assert.equal(label.textContent, 'Entrar');
});
