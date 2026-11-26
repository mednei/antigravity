const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { environment, clickLesson, toggle, progress, lessonData, progressKey } = require('./course-fixtures.cjs');
const read = path => fs.readFileSync(path, 'utf8');
const lessons = lessonData(read('assets/js/course.js'));
const totalLessons = lessons.length;
const sourceFiles = [
  'docs/01-primeiros-passos/contas-perfis-workspaces.md',
  'docs/02-formacao-agentes/01-fundamentos-plataforma-agentica.md',
  'docs/02-formacao-agentes/02-os-4-pilares.md',
  'docs/02-formacao-agentes/03-ciclo-agentico-e-governanca.md',
  'docs/01-primeiros-passos/planos-quotas-rate-limits.md',
  'docs/02-formacao-agentes/04-artefatos-e-walkthrough.md'
];
const original = path => execFileSync('git', ['show', `af1c552:${path}`], { encoding: 'utf8' });

test('Lote 1 preserva as quatro aulas e os dez objetos anteriores', () => {
  assert.ok(totalLessons >= 14);
  assert.deepEqual(lessons.slice(0, 10), lessonData(original('assets/js/course.js')));
  assert.deepEqual(lessons.slice(10,14).map(lesson => lesson.title), [
    'Contas, perfis e workspaces', 'Arquitetura do agente e ambientes de trabalho',
    'Ciclo, regras e permissões', 'Planos, artefatos e relatório de entrega'
  ]);
  lessons.slice(10,14).forEach(lesson => {
    assert.equal(lesson.trail, 'formacao');
    for (const field of ['title','category','duration','objective','intro','body','exercise','expected']) assert.ok(lesson[field].trim(), field);
    assert.ok(lesson.concepts.length);
    assert.ok(lesson.sources.length);
  });
});

test('as seis fontes permanecem intactas e nenhuma aula exibe marcação de dúvida', () => {
  sourceFiles.forEach(path => assert.equal(read(path).replace(/\r\n/g, '\n'), original(path).replace(/\r\n/g, '\n'), path));
  lessons.forEach(lesson => assert.doesNotMatch(lesson.body, /VERIFICAR|verification-badge|Conteúdo a verificar/));
  assert.match(lessons[11].body, /organiza o material; não é uma nomenclatura comercial oficial/);
  assert.match(lessons[13].body, /Aula 10/);
});

test('trilhas preservam dez existentes e os índices seguintes de formação', () => {
  const env = environment(); env.run('assets/js/course.js'); env.start();
  const html = env.nodes['lesson-list'].innerHTML;
  const groups = html.split('<section class="lesson-trail"').slice(1);
  assert.equal(groups.length, 2);
  assert.match(groups[0], /Trilha principal/);
  assert.match(groups[1], /Formação em agentes/);
  const indices = text => [...text.matchAll(/data-lesson="(\d+)"/g)].map(match => Number(match[1]));
  assert.deepEqual(indices(groups[0]), Array.from({ length: 10 }, (_, index) => index));
  assert.deepEqual(indices(groups[1]), Array.from({ length: totalLessons - 10 }, (_, index) => index + 10));
  assert.deepEqual(indices(html), Array.from({ length: totalLessons }, (_, index) => index));
});

test('progresso local preserva índices e calcula sobre o total real, não capacidade 26', () => {
  const env = environment({ [progressKey]: '[0,1,2]' });
  env.run('assets/js/course.js'); env.start();
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(300 / totalLessons)}%`);
  clickLesson(env, 10); toggle(env);
  assert.deepEqual(progress(env), [0,1,2,10]);
  assert.equal(env.nodes['progress-percent'].textContent, `${Math.round(400 / totalLessons)}%`);
  const reload = environment(Object.fromEntries(env.storage));
  reload.run('assets/js/course.js'); reload.start();
  assert.deepEqual(progress(reload), [0,1,2,10]);
});

test('schema inicial e scripts de compatibilidade não reduzem a capacidade 0–25', () => {
  const names = ['fase-a-schema.sql','fase-b-schema.sql','20261126-primeiros-passos.sql','20261126-planos-quotas.sql'];
  names.forEach(name => {
    const sql = read(`docs/supabase/${name}`);
    const bounds = [...sql.matchAll(/between 0 and (\d+)/g)].map(match => Number(match[1]));
    assert.deepEqual(bounds, [25,25]);
    assert.doesNotMatch(sql, /drop table|delete from|disable row level security/i);
  });
});

test('todos os 29 marcadores têm veredito; removidos têm fontes, mantidos continuam na tabela', () => {
  const marked = new Set(sourceFiles.flatMap(path => [...read(path).matchAll(/VERIFICAR: ver pendencias-verificacao\.md, item (\d+)/g)].map(match => Number(match[1]))));
  const evidence = read('docs/02-formacao-agentes/lote-1-verificacao.md');
  const rows = [...evidence.matchAll(/^\| (\d+) \| (Confirmado|Parcial|Não confirmado) \| (.+)$/gm)];
  assert.equal(marked.size, 29);
  assert.equal(rows.length, 29);
  const pending = read('docs/pendencias-verificacao.md');
  const before = original('docs/pendencias-verificacao.md');
  const tableIds = text => [...text.matchAll(/^\| (\d+) \|/gm)].map(match => Number(match[1]));
  const retained = tableIds(pending);
  const removed = tableIds(before).filter(id => !retained.includes(id));
  assert.deepEqual(removed, [1,2]);
  rows.forEach(row => {
    const id = Number(row[1]);
    assert.ok(marked.has(id), `item ${id}`);
    assert.match(row[3], /https:\/\/(antigravity.google|codelabs.developers.google.com|github.com\/google-antigravity)\//);
    assert.equal(retained.includes(id), row[2] !== 'Confirmado', `estado do item ${id}`);
  });
  assert.doesNotMatch(read('produtos.html'), /catalog-v2-seen|O catálogo foi ampliado/);
});
