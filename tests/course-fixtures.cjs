const fs = require('node:fs');
const vm = require('node:vm');

const read = path => fs.readFileSync(path, 'utf8');
const progressKey = 'antigravity-lab-progress-v1';
function lessonData(text) {
  const declaration = text.slice(text.indexOf('const lessons = ['), text.indexOf(`const storageKey = '${progressKey}';`));
  return JSON.parse(JSON.stringify(vm.runInNewContext(declaration + '; lessons')));
}
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


module.exports = { node, environment, fakeAuth, fakeDatabase, clickLesson, toggle, progress, tick, lessonData, progressKey };

// Exceções editoriais autorizadas pelo usuário: só orientações sobre pastas.
function assertLessonPreservation(actual, expected) {
  const clean = values => values.map((lesson, index) => {
    const copy = { ...lesson };
    const fields = { 1: ['objective','body','exercise','expected'], 7: ['body'], 10: ['body'] };
    (fields[index] || []).forEach(field => { delete copy[field]; });
    return copy;
  });
  require('node:assert/strict').deepEqual(clean(actual), clean(expected));
}
module.exports.assertLessonPreservation = assertLessonPreservation;
