// PREENCHER com as credenciais do seu projeto Supabase (Settings > API).
// A anon key é pública por design, a proteção é o RLS.
// Também aceita a chave pública publishable. NUNCA usar service_role/secret.
// Um site estático não carrega .env: edite somente os dois valores públicos.
const SUPABASE_CONFIG = Object.freeze({
  url: '',
  anonKey: ''
});

(function () {
  'use strict';

  const state = { client: null, configured: false, error: null };
  const timeoutMs = 8000;

  function publicKey(key) {
    if (key.startsWith('sb_publishable_')) return true;
    if (key.startsWith('sb_secret_')) return false;
    try {
      const encoded = key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(atob(encoded));
      return payload.role === 'anon';
    } catch (error) {
      return false;
    }
  }

  function loadLibrary() {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const timer = setTimeout(() => {
        script.remove();
        reject(new Error('Não foi possível carregar o acesso à conta. Continue estudando neste navegador.'));
      }, timeoutMs);
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.async = true;
      script.onload = () => { clearTimeout(timer); resolve(); };
      script.onerror = () => {
        clearTimeout(timer);
        script.remove();
        reject(new Error('Não foi possível carregar o acesso à conta. Verifique sua conexão.'));
      };
      document.head.appendChild(script);
    });
  }

  async function timedFetch(input, options = {}) {
    const controller = new AbortController();
    const abort = () => controller.abort();
    const signal = options.signal;
    if (signal) {
      if (signal.aborted) controller.abort();
      else signal.addEventListener('abort', abort, { once: true });
    }
    const timer = setTimeout(abort, timeoutMs);
    try {
      return await fetch(input, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(timer);
      if (signal) signal.removeEventListener('abort', abort);
    }
  }

  async function initialize() {
    const url = SUPABASE_CONFIG.url.trim();
    const anonKey = SUPABASE_CONFIG.anonKey.trim();
    if (!url && !anonKey) return null;
    try {
      const parsed = new URL(url);
      const local = ['localhost', '127.0.0.1', '[::1]'].includes(parsed.hostname);
      if ((parsed.protocol !== 'https:' && !(local && parsed.protocol === 'http:')) ||
          parsed.username || parsed.password || !publicKey(anonKey)) {
        throw new Error('Confira a URL e a chave pública na configuração do Supabase.');
      }
      state.configured = true;
      await loadLibrary();
      if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        throw new Error('A biblioteca de acesso à conta está indisponível.');
      }
      state.client = window.supabase.createClient(url, anonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
        global: { fetch: timedFetch }
      });
      return state.client;
    } catch (error) {
      state.error = error;
      return null;
    }
  }

  window.AntigravitySupabase = {
    ready: initialize(),
    getClient: () => state.client,
    getState: () => ({ ...state })
  };
})();
