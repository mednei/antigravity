const { assertLessonPreservation } = require('./course-fixtures.cjs');
// Preparado para o usuário executar. Sem rede e sem banco real.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { environment, fakeAuth, fakeDatabase, clickLesson, toggle, progress, tick, lessonData, progressKey } = require('./course-fixtures.cjs');
const read = path => fs.readFileSync(path, 'utf8');
const lessons = lessonData(read('assets/js/course.js'));
const totalLessons = lessons.length;
const baseline = path => execFileSync('git', ['show', `28ed616:${path}`], { encoding: 'utf8' });
const normalize = value => value.replace(/\r\n/g, '\n');

test('preserva a Aula 10, os nove objetos anteriores e a chave de progresso', () => {
  assert.ok(totalLessons >= 10);
  assertLessonPreservation(lessons.slice(0, 9), lessonData(baseline('assets/js/course.js')));
  assert.equal(lessons[9].title, 'Planos, quotas e limites de uso');
  assert.equal(lessons[9].trail, 'primeiros-passos');
  assert.match(read('assets/js/course.js'), /const storageKey = 'antigravity-lab-progress-v1'/);
});

test('preserva o MD e mapeia todas as marcações para decisões documentadas', () => {
  const path = 'docs/01-primeiros-passos/planos-quotas-rate-limits.md';
  assert.equal(normalize(read(path)), normalize(baseline(path)));
  const items = [...read(path).matchAll(/VERIFICAR: ver pendencias-verificacao\.md, item (\d+)/g)].map(match => match[1]);
  assert.deepEqual(items, ['14', '16', '17']);
  const evidence = read('docs/01-primeiros-passos/planos-quotas-rate-limits-verificacao.md');
  items.forEach(item => assert.match(evidence, new RegExp(`Item ${item}\\b`)));
});

test('aula distingue escopos e cita fontes sem instruções excluídas ou badges', () => {
  const body = lessons[9].body;
  assert.match(body, /TPM, tokens de entrada por minuto/);
  assert.match(body, /Gemini API/);
  assert.match(body, /SDK Python/);
  assert.match(body, /agente de navegador do Antigravity App/);
  for (const source of ['https://ai.google.dev/gemini-api/docs/rate-limits', 'https://antigravity.google/docs/plans', 'https://antigravity.google/docs/browser']) {
    assert.ok(body.includes(source));
  }
  assert.doesNotMatch(body, /VERIFICAR|verification-badge|Conteúdo a verificar|2s\/4s\/8s|Jitter|Aguardando liberação de cota|Vertex AI Enterprise|sem perda de progresso/);
});

test('catálogo mantém duas trilhas e dez índices únicos na mesma ordem', () => {
  const env = environment(); env.run('assets/js/course.js'); env.start();
  const html = env.nodes['lesson-list'].innerHTML;
  assert.equal((html.match(/class="lesson-trail"/g) || []).length, 2);
  assert.deepEqual([...html.matchAll(/data-lesson="(\d+)"/g)].map(match => Number(match[1])), Array.from({ length: totalLessons }, (_, index) => index));
  assert.match(html, /Formação em agentes/);
});

test('a Aula 10 persiste junto ao progresso antigo e recalcula o percentual', () => {
  const env = environment({ [progressKey]: '[0,8]' });
  env.run('assets/js/course.js'); env.start(); clickLesson(env, 9); toggle(env);
  assert.deepEqual(progress(env), [0, 8, 9]);
  assert.equal(env.nodes['progress-label'].textContent, `3 de ${totalLessons} aulas concluídas`);
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(300 / totalLessons)}%`);
  const reload = environment(Object.fromEntries(env.storage));
  reload.run('assets/js/course.js'); reload.start();
  assert.equal(reload.nodes['progress-percent'].textContent, `${Math.round(300 / totalLessons)}%`);
  clickLesson(reload, 9); toggle(reload);
  assert.deepEqual(progress(reload), [0, 8]);
});

test('envia o índice 9 e recupera em outra sessão; constraint antiga fica local', async () => {
  for (const error of [null, { code: '23514', message: 'schema antigo' }]) {
    const env = environment();
    const db = fakeDatabase([], { writeError: error });
    env.sandbox.AntigravityAuth = fakeAuth({ id: 'aluno-planos' }, db.client);
    env.run('assets/js/course.js'); env.start(); await tick();
    clickLesson(env, 9); toggle(env); await tick();
    const write = db.calls.find(call => call.kind === 'upsert');
    assert.equal(write.value.aula_index, 9);
    assert.equal(write.value.aluno_id, 'aluno-planos');
    const reload = environment(error ? Object.fromEntries(env.storage) : {});
    const remote = fakeDatabase(error ? [] : [{ aula_index: 9 }]);
    reload.sandbox.AntigravityAuth = fakeAuth({ id: 'aluno-planos' }, remote.client);
    reload.run('assets/js/course.js'); reload.start(); await tick();
    assert.deepEqual(progress(reload), [9]);
    assert.equal(reload.nodes['progress-percent'].textContent, `${Math.round(100 / totalLessons)}%`);
    if (error) assert.match(reload.nodes['progress-sync-status'].textContent, /migration/);
  }
});

test('SQL de compatibilidade não reduz capacidade de 26 aulas ou RLS', () => {
  const sql = read('docs/supabase/20261126-planos-quotas.sql');
  assert.equal((sql.match(/between 0 and 25/g) || []).length, 2);
  assert.match(sql, /progresso_aula_index_check/);
  assert.match(sql, /anotacoes_aula_index_check/);
  assert.match(sql, /to_regclass\('public.anotacoes'\)/);
  assert.doesNotMatch(sql, /drop table|delete from|drop policy|disable row level security/i);
});
