// Preparado para o usuário executar. Sem rede e sem banco real.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const {
  environment, fakeAuth, fakeDatabase, clickLesson, toggle, progress, tick, lessonData, progressKey
} = require('./course-fixtures.cjs');
const read = path => fs.readFileSync(path, 'utf8');
const lessons = lessonData(read('assets/js/course.js'));
const totalLessons = lessons.length;
const normalize = text => text.replace(/\r\n/g, '\n');

function startAccount(storage = {}, error = null, userId = 'aluno-a', rows = []) {
  const env = environment(storage);
  const db = fakeDatabase(rows, { writeError: error });
  env.sandbox.AntigravityAuth = fakeAuth({ id: userId }, db.client);
  env.run('assets/js/course.js'); env.start();
  return { env, db };
}

test('preserva a Aula 09 e os oito objetos anteriores', () => {
  const before = execFileSync('git', ['show', '874e923:assets/js/course.js'], { encoding: 'utf8' });
  assert.ok(totalLessons >= 9);
  assert.deepEqual(lessons.slice(0, 8), lessonData(before));
  assert.equal(lessons[8].trail, 'primeiros-passos');
  assert.equal(lessons[8].title, 'Instalação e requisitos');
});

test('MD-fonte preservado; as sete marcações têm decisão editorial, sem badges na aula', () => {
  const path = 'docs/01-primeiros-passos/instalacao-e-requisitos.md';
  const before = execFileSync('git', ['show', `874e923:${path}`], { encoding: 'utf8' });
  assert.equal(normalize(read(path)), normalize(before));
  const items = [...read(path).matchAll(/VERIFICAR: ver pendencias-verificacao\.md, item (\d+)/g)].map(match => match[1]);
  assert.deepEqual(items, ['4', '18', '20', '21', '22', '23', '75']);
  const evidence = read('docs/01-primeiros-passos/instalacao-e-requisitos-verificacao.md');
  items.forEach(item => assert.match(evidence, new RegExp(`Item ${item}\\b`)));
  assert.doesNotMatch(lessons[8].body, /VERIFICAR|verification-badge|Conteúdo a verificar|agy extensions install|extensionsGallery|Copy-Item|Lacunas de origem/);
  assert.match(lessons[8].body, /https:\/\/antigravity.google\/docs\/ide\/extensions\/vscode\//);
  assert.match(lessons[8].body, /https:\/\/antigravity.google\/docs\/ssh\//);
  assert.match(lessons[8].body, /https:\/\/github.com\/microsoft\/pylance-release\/blob\/main\/FAQ.md/);
});

test('catálogo agrupa duas trilhas sem renumerar ou duplicar índices', () => {
  const env = environment();
  env.run('assets/js/course.js'); env.start();
  const html = env.nodes['lesson-list'].innerHTML;
  assert.match(html, /Trilha principal/);
  assert.match(html, /Primeiros passos/);
  assert.equal((html.match(/class="lesson-trail"/g) || []).length, 2);
  const indices = [...html.matchAll(/data-lesson="(\d+)"/g)].map(match => Number(match[1]));
  assert.deepEqual(indices, Array.from({ length: totalLessons }, (_, index) => index));
  assert.equal(new Set(indices).size, totalLessons);
});

test('progresso local antigo aceita a aula nova na mesma chave e persiste na recarga', () => {
  const env = environment({ [progressKey]: '[0,7]' });
  env.run('assets/js/course.js'); env.start();
  clickLesson(env, 8); toggle(env);
  assert.deepEqual(progress(env), [0, 7, 8]);
  assert.equal(env.nodes['progress-label'].textContent, `3 de ${totalLessons} aulas concluídas`);
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(3 / totalLessons * 100)}%`);
  const reload = environment(Object.fromEntries(env.storage));
  reload.run('assets/js/course.js'); reload.start();
  assert.deepEqual(progress(reload), [0, 7, 8]);
  assert.equal(reload.nodes['progress-label'].textContent, `3 de ${totalLessons} aulas concluídas`);
});

test('conta configurada envia o índice 8; outra sessão recupera a conclusão', async () => {
  const { env, db } = startAccount(); await tick();
  clickLesson(env, 8); toggle(env); await tick();
  const call = db.calls.find(call => call.kind === 'upsert');
  assert.equal(call.value.aula_index, 8);
  assert.equal(call.value.aluno_id, 'aluno-a');
  const other = startAccount({}, null, 'aluno-a', [{ aula_index: 8 }]); await tick();
  assert.deepEqual(progress(other.env), [8]);
  assert.equal(other.env.nodes['progress-percent'].textContent, `${Math.round(100 / totalLessons)}%`);
});

test('constraint antiga mantém a nova conclusão na recarga e separa contas/visitante', async () => {
  const { env } = startAccount({}, { code: '23514', message: 'constraint' }); await tick();
  clickLesson(env, 8); toggle(env); await tick();
  assert.deepEqual(progress(env), [8]);
  assert.match(env.nodes['progress-sync-status'].textContent, /neste navegador/);
  const saved = Object.fromEntries(env.storage);
  const reload = startAccount(saved); await tick();
  assert.deepEqual(progress(reload.env), [8]);
  assert.match(reload.env.nodes['progress-sync-status'].textContent, /migration/);
  const other = startAccount(saved, null, 'aluno-b'); await tick();
  assert.deepEqual(progress(other.env), []);
  reload.env.sandbox.AntigravityAuth.change(null); await tick();
  assert.deepEqual(progress(reload.env), []);
});

test('após migration, desmarcar e remarcar limpa a pendência local de schema', async () => {
  const pendingKey = `${progressKey}:schema-pending:aluno-a`;
  const { env, db } = startAccount({
    [progressKey]: '[8]', [`${progressKey}:owner`]: 'aluno-a',
    [`${progressKey}:aluno-a`]: '[8]', [pendingKey]: '[8]'
  }); await tick();
  clickLesson(env, 8); toggle(env); await tick();
  toggle(env); await tick();
  assert.deepEqual(progress(env), [8]);
  assert.deepEqual(JSON.parse(env.storage.get(pendingKey)), []);
  assert.deepEqual(db.calls.filter(call => call.kind !== 'select').map(call => call.kind), ['delete', 'upsert']);
});

test('migration contempla progresso e anotações sem remover tabelas ou políticas', () => {
  const sql = read('docs/supabase/20261126-primeiros-passos.sql');
  assert.equal((sql.match(/between 0 and 8/g) || []).length, 2);
  assert.match(sql, /progresso_aula_index_check/);
  assert.match(sql, /anotacoes_aula_index_check/);
  assert.match(sql, /to_regclass\('public.anotacoes'\)/);
  assert.doesNotMatch(sql, /drop table|delete from|drop policy|disable row level security/i);
});
