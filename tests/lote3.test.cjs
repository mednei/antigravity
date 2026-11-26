const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { environment, clickLesson, toggle, progress, fakeAuth, fakeDatabase, tick, lessonData, progressKey } = require('./course-fixtures.cjs');
const read = path => fs.readFileSync(path,'utf8');
const before = path => execFileSync('git',['show',`8cadf2a:${path}`],{encoding:'utf8'});
const lessons = lessonData(read('assets/js/course.js'));
const sources = ['docs/02-formacao-agentes/06-mcp-integracoes.md','docs/03-laboratorios/lab-multi-agentes.md','docs/03-laboratorios/lab-navegador-sandbox.md'];

test('Lote 3 tem 21 aulas e altera só os campos de pastas autorizados nas anteriores', () => {
  assert.equal(lessons.length,21);
  const original = lessonData(before('assets/js/course.js'));
  const changed = {};
  original.forEach((lesson,index) => {
    const fields = Object.keys(lesson).filter(key => JSON.stringify(lesson[key]) !== JSON.stringify(lessons[index][key]));
    if(fields.length) changed[index] = fields.sort();
    assert.deepEqual(Object.keys(lessons[index]).sort(),Object.keys(lesson).sort());
  });
  assert.deepEqual(changed,{1:['body','exercise','expected','objective'],7:['body'],10:['body']});
  assert.deepEqual(lessons.slice(18).map(lesson=>lesson.title),['MCP e integrações','Trabalho com múltiplos agentes','Validação no navegador']);
  lessons.slice(18).forEach(lesson=>{
    assert.equal(lesson.trail,'formacao');
    for(const field of ['title','category','duration','objective','intro','body','exercise','expected']) assert.ok(lesson[field].trim(),field);
    assert.ok(lesson.concepts.length && lesson.sources.length);
  });
});

test('pastas são modelos adaptáveis; segurança e cópia de comandos são preservadas', () => {
  for(const index of [1,7,10]) assert.match(lessons[index].body,/modelo sugerido|modelo de organização/);
  assert.match(lessons[1].body,/não uma obrigatoriedade/);
  assert.match(lessons[7].body,/somente no backend/);
  assert.match(lessons[7].body,/ignore-o antes do primeiro commit/);
  assert.match(lessons[20].body,/public\/.*8080.*exemplos.*não uma obrigatoriedade/);
  const copies = text=>[...text.matchAll(/data-copy="([^"]*)"/g)].map(match=>match[1]);
  assert.deepEqual(copies(read('mongodb.html')),copies(before('mongodb.html')));
  assert.match(read('mongodb.html'),/ajuste o campo <code>path<\/code> ao local que você escolheu/);
});

test('fontes preservadas e nenhuma aula exibe badge ou contrato não confirmado',()=>{
  sources.forEach(path=>assert.equal(read(path).replace(/\r\n/g,'\n'),before(path).replace(/\r\n/g,'\n'),path));
  lessons.forEach(lesson=>assert.doesNotMatch(lesson.body,/VERIFICAR|verification-badge|Conteúdo a verificar/));
  assert.doesNotMatch(lessons.slice(18).map(lesson=>lesson.body).join(' '),/@modelcontextprotocol\/server-sqlite|REDACTED_SECRET|context_handoff|risco zero garantido|Ctrl\+1/);
});

test('catálogo conserva duas trilhas com índices únicos 0–20, distribuídos em 10 + 11',()=>{
  const env=environment();env.run('assets/js/course.js');env.start();
  const html=env.nodes['lesson-list'].innerHTML;
  const groups=html.split('<section class="lesson-trail"').slice(1);
  const ids=text=>[...text.matchAll(/data-lesson="(\d+)"/g)].map(match=>Number(match[1]));
  assert.equal(groups.length,2);
  assert.deepEqual(ids(groups[0]),Array.from({length:10},(_,index)=>index));
  assert.deepEqual(ids(groups[1]),Array.from({length:11},(_,index)=>index+10));
  assert.deepEqual(ids(html),Array.from({length:21},(_,index)=>index));
});

test('progresso antigo e aula 19 persistem sobre total real 21',()=>{
  const env=environment({[progressKey]:'[0,1,2]'});env.run('assets/js/course.js');env.start();
  assert.equal(env.nodes['progress-percent'].textContent,'14%');
  clickLesson(env,18);toggle(env);
  assert.deepEqual(progress(env),[0,1,2,18]);
  assert.equal(env.nodes['progress-percent'].textContent,'19%');
  const reload=environment(Object.fromEntries(env.storage));reload.run('assets/js/course.js');reload.start();
  assert.deepEqual(progress(reload),[0,1,2,18]);
});

test('envio e recuperação simulada do índice 20 funcionam sem nova migration',async()=>{
  const env=environment();const db=fakeDatabase();env.sandbox.AntigravityAuth=fakeAuth({id:'aluno-lote3'},db.client);
  env.run('assets/js/course.js');env.start();await tick();clickLesson(env,20);toggle(env);await tick();
  assert.equal(db.calls.find(call=>call.kind==='upsert').value.aula_index,20);
  const other=environment();other.sandbox.AntigravityAuth=fakeAuth({id:'aluno-lote3'},fakeDatabase([{aula_index:20}]).client);
  other.run('assets/js/course.js');other.start();await tick();assert.deepEqual(progress(other),[20]);
  assert.equal(other.nodes['progress-percent'].textContent,'5%');
  for(const name of ['fase-a-schema.sql','fase-b-schema.sql','20261126-primeiros-passos.sql','20261126-planos-quotas.sql']){
    const path=`docs/supabase/${name}`;assert.equal(read(path).replace(/\r\n/g,'\n'),before(path).replace(/\r\n/g,'\n'));
  }
});

test('oito itens possuem veredito e fontes; confirmação parcial não remove pendência',()=>{
  const marked=new Set(sources.flatMap(path=>[...read(path).matchAll(/VERIFICAR: ver pendencias-verificacao\.md, item (\d+)/g)].map(match=>Number(match[1]))));
  const evidence=read('docs/02-formacao-agentes/lote-3-verificacao.md');
  const rows=[...evidence.matchAll(/^\| (\d+) \| (Parcial|Não confirmado) \| (.+)$/gm)];
  assert.equal(marked.size,8);assert.equal(rows.length,8);
  const pending=read('docs/pendencias-verificacao.md');
  const ids=text=>[...text.matchAll(/^\| (\d+) \|/gm)].map(match=>Number(match[1]));
  const retained=ids(pending);assert.deepEqual(ids(before('docs/pendencias-verificacao.md')).filter(id=>!retained.includes(id)),[]);
  rows.forEach(row=>{const id=Number(row[1]);assert.ok(marked.has(id)&&retained.includes(id));assert.match(row[3],/https:\/\//);assert.match(pending,new RegExp(`^\\| ${id} \\|.*Lote 3`,'m'));});
});
