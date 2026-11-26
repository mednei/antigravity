const { assertLessonPreservation } = require('./course-fixtures.cjs');
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { environment, clickLesson, toggle, progress, fakeDatabase, fakeAuth, tick, lessonData, progressKey } = require('./course-fixtures.cjs');
const read = path => fs.readFileSync(path, 'utf8');
const before = path => execFileSync('git', ['show', `910dded:${path}`], { encoding: 'utf8' });
const lessons = lessonData(read('assets/js/course.js'));
const totalLessons = lessons.length;
const sources = [
  'docs/03-laboratorios/lab-rag-e-contexto.md', 'docs/03-laboratorios/lab-terminal-e-shell.md',
  'docs/02-formacao-agentes/10-concorrencia-e-mensagens.md',
  'docs/02-formacao-agentes/11-sessoes-versionamento-rollback.md',
  'docs/02-formacao-agentes/05-hooks-e-validacao.md'
];

test('Lote 2 acrescenta quatro aulas e preserva os 14 objetos anteriores', () => {
  assert.ok(totalLessons >= 18);
  assertLessonPreservation(lessons.slice(0,14), lessonData(before('assets/js/course.js')));
  assert.deepEqual(lessons.slice(14,18).map(lesson => lesson.title), [
    'Contexto, recuperação e memória', 'Terminal, filas e tarefas dependentes',
    'Sessões, versões e restauração', 'Validação e automação com hooks'
  ]);
  lessons.slice(14,18).forEach(lesson => {
    assert.equal(lesson.trail, 'formacao');
    for (const field of ['title','category','duration','objective','intro','body','exercise','expected']) assert.ok(lesson[field].trim(), field);
    assert.ok(lesson.concepts.length && lesson.sources.length);
  });
});

test('fontes intactas e conteúdo sem badges ou contratos excluídos', () => {
  sources.forEach(path => assert.equal(read(path).replace(/\r\n/g,'\n'), before(path).replace(/\r\n/g,'\n'), path));
  lessons.forEach(lesson => assert.doesNotMatch(lesson.body, /VERIFICAR|verification-badge|Conteúdo a verificar/));
  const newContent = lessons.slice(14,18).map(lesson => lesson.body).join(' ');
  assert.doesNotMatch(newContent, /StateConflictError|agy memory|agy history|\.antigravity\/shadow_git|\/tasks kill-all|blocking: true|postFormat|redução superior a 80%/);
  assert.match(lessons[14].body, /não descreve uma implementação interna comprovada/);
  assert.match(lessons[15].body, /50\.000/);
});

test('catálogo tem 18 índices sequenciais em duas trilhas, 10 + 8', () => {
  const env = environment(); env.run('assets/js/course.js'); env.start();
  const html = env.nodes['lesson-list'].innerHTML;
  const groups = html.split('<section class="lesson-trail"').slice(1);
  const ids = text => [...text.matchAll(/data-lesson="(\d+)"/g)].map(match => Number(match[1]));
  assert.equal(groups.length, 2);
  assert.deepEqual(ids(groups[0]), Array.from({ length: 10 }, (_, index) => index));
  assert.deepEqual(ids(groups[1]), Array.from({ length: totalLessons - 10 }, (_, index) => index + 10));
  assert.deepEqual(ids(html), Array.from({ length: totalLessons }, (_, index) => index));
});

test('progresso local antigo continua válido e usa o total real 18 na recarga', () => {
  const env = environment({ [progressKey]: '[0,1,2]' });
  env.run('assets/js/course.js'); env.start();
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(300 / totalLessons)}%`);
  clickLesson(env, 14); toggle(env);
  assert.deepEqual(progress(env), [0,1,2,14]);
  assert.equal(env.nodes['progress-label'].textContent, `4 de ${totalLessons} aulas concluídas`);
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(400 / totalLessons)}%`);
  const reload = environment(Object.fromEntries(env.storage)); reload.run('assets/js/course.js'); reload.start();
  assert.deepEqual(progress(reload), [0,1,2,14]);
});

test('índice 17 é enviado por conta e recuperado em outra sessão simulada', async () => {
  const env = environment(); const db = fakeDatabase();
  env.sandbox.AntigravityAuth = fakeAuth({ id: 'aluno-lote2' }, db.client);
  env.run('assets/js/course.js'); env.start(); await tick();
  clickLesson(env, 17); toggle(env); await tick();
  assert.equal(db.calls.find(call => call.kind === 'upsert').value.aula_index, 17);
  const other = environment(); const remote = fakeDatabase([{ aula_index: 17 }]);
  other.sandbox.AntigravityAuth = fakeAuth({ id: 'aluno-lote2' }, remote.client);
  other.run('assets/js/course.js'); other.start(); await tick();
  assert.deepEqual(progress(other), [17]);
  assert.equal(other.nodes['progress-percent'].textContent, `${Math.round(100 / totalLessons)}%`);
});

test('schemas existentes já cobrem o lote e não foram modificados', () => {
  for (const name of ['fase-a-schema.sql','fase-b-schema.sql','20261126-primeiros-passos.sql','20261126-planos-quotas.sql']) {
    const path = `docs/supabase/${name}`;
    assert.equal(read(path).replace(/\r\n/g,'\n'), before(path).replace(/\r\n/g,'\n'));
    assert.equal((read(path).match(/between 0 and 25/g) || []).length, 2);
  }
});

test('os 19 itens têm fonte e veredito; nenhum foi removido por confirmação parcial', () => {
  const marked = new Set(sources.flatMap(path => [...read(path).matchAll(/VERIFICAR: ver pendencias-verificacao\.md, item (\d+)/g)].map(match => Number(match[1]))));
  const evidence = read('docs/02-formacao-agentes/lote-2-verificacao.md');
  const rows = [...evidence.matchAll(/^\| (\d+) \| (Parcial|Não confirmado|Lacuna) \| (.+)$/gm)];
  assert.equal(marked.size, 19); assert.equal(rows.length, 19);
  const ids = text => [...text.matchAll(/^\| (\d+) \|/gm)].map(match => Number(match[1]));
  const pending = read('docs/pendencias-verificacao.md');
  const retained = ids(pending);
  assert.deepEqual(ids(before('docs/pendencias-verificacao.md')).filter(id => !retained.includes(id)), []);
  rows.forEach(row => {
    const id = Number(row[1]); assert.ok(marked.has(id) && retained.includes(id));
    if (id !== 75) assert.match(row[3], /https:\/\/antigravity.google\/docs\//);
    else assert.match(row[3], /não foram recebidos/);
    assert.match(pending, new RegExp(`^\\| ${id} \\|.*Lote 2`, 'm'));
  });
});
