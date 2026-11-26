(function () {
  'use strict';

  const listeners = new Set();
  let client = null;
  let user = null;
  let initialized = false;
  let initializationError = null;
  let authRevision = 0;
  let logoutPending = null;

  function snapshot() {
    return { user, client, initialized, error: initializationError };
  }

  function firstName() {
    const name = user && user.user_metadata && user.user_metadata.nome;
    return typeof name === 'string' && name.trim() ? name.trim().split(/\s+/)[0] : 'Aluno';
  }

  function renderNavigation() {
    document.querySelectorAll('[data-auth-link]').forEach(link => {
      const label = link.querySelector('[data-auth-label]');
      const text = user ? `${firstName()} · Sair` : 'Entrar';
      if (label) label.textContent = text;
      else link.textContent = text;
      link.setAttribute('aria-label', user ? `Sair da conta de ${firstName()}` : 'Entrar ou criar conta');
      if (user) {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  function notify() {
    renderNavigation();
    listeners.forEach(callback => {
      try { callback(snapshot()); } catch (error) { /* Um consumidor não bloqueia os demais. */ }
    });
  }

  function setUser(nextUser) {
    const changed = (user && user.id) !== (nextUser && nextUser.id) ||
      JSON.stringify(user && user.user_metadata) !== JSON.stringify(nextUser && nextUser.user_metadata);
    user = nextUser || null;
    if (changed || !initialized) {
      initialized = true;
      // A callback de onAuthStateChange fica síncrona: consultas vêm depois do lock de Auth.
      setTimeout(notify, 0);
    }
  }

  async function initialize() {
    try {
      client = window.AntigravitySupabase ? await window.AntigravitySupabase.ready : null;
      if (!client) {
        initializationError = window.AntigravitySupabase && window.AntigravitySupabase.getState().error;
        setUser(null);
        return snapshot();
      }
      client.auth.onAuthStateChange((event, session) => {
        authRevision += 1;
        setUser(session && session.user);
      });
      const revision = authRevision;
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (revision === authRevision) setUser(data.session && data.session.user);
    } catch (error) {
      initializationError = error;
      setUser(null);
    }
    return snapshot();
  }

  const ready = initialize();

  async function requireClient() {
    await ready;
    if (!client) {
      throw new Error('O acesso à conta ainda não foi configurado. Você pode continuar estudando sem entrar.');
    }
    return client;
  }

  async function cadastro(email, senha, nome) {
    const connection = await requireClient();
    if (!nome.trim()) throw new Error('Informe seu nome para criar a conta.');
    const { data, error } = await connection.auth.signUp({
      email: email.trim(),
      password: senha,
      options: {
        data: { nome: nome.trim() },
        emailRedirectTo: new URL('./login.html', window.location.href).href
      }
    });
    if (error) throw error;
    if (data.session) setUser(data.session.user);
    return data;
  }

  async function login(email, senha) {
    const connection = await requireClient();
    const { data, error } = await connection.auth.signInWithPassword({ email: email.trim(), password: senha });
    if (error) throw error;
    if (!data.session) throw new Error('Não foi possível iniciar a sessão. Tente novamente.');
    setUser(data.session.user);
    return data;
  }

  async function logout() {
    if (logoutPending) return logoutPending;
    logoutPending = (async () => {
      const connection = await requireClient();
      const { error } = await connection.auth.signOut({ scope: 'local' });
      if (error) throw error;
      setUser(null);
    })();
    try { await logoutPending; } finally { logoutPending = null; }
  }

  async function obterUsuarioAtual() {
    await ready;
    return user;
  }

  window.AntigravityAuth = {
    ready, cadastro, login, logout, obterUsuarioAtual,
    getState: snapshot,
    subscribe(callback) {
      listeners.add(callback);
      if (initialized) callback(snapshot());
      return () => listeners.delete(callback);
    }
  };

  function feedback(element, message, error = false) {
    if (!element) return;
    element.textContent = message;
    element.className = `form-feedback is-visible ${error ? 'error' : 'info'}`;
  }

  function authError(error) {
    const messages = {
      invalid_credentials: 'E-mail ou senha incorretos.',
      email_not_confirmed: 'Confirme seu e-mail antes de entrar.',
      user_already_exists: 'Já existe uma conta com este e-mail. Tente entrar.',
      weak_password: 'Escolha uma senha mais forte, conforme os requisitos do projeto.',
      over_email_send_rate_limit: 'Aguarde alguns instantes antes de solicitar outro e-mail.',
      over_request_rate_limit: 'Muitas tentativas. Aguarde alguns instantes e tente novamente.'
    };
    return messages[error && error.code] || 'Não foi possível concluir. Confira os dados e sua conexão e tente novamente.';
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    document.querySelectorAll('[data-auth-link]').forEach(link => {
      link.addEventListener('click', async event => {
        if (!user) return;
        event.preventDefault();
        if (logoutPending) return;
        const original = link.getAttribute('aria-label');
        link.setAttribute('aria-disabled', 'true');
        try {
          await logout();
          const notice = document.getElementById('auth-session-feedback');
          if (notice) { notice.textContent = ''; notice.className = 'form-feedback'; }
        } catch (error) {
          let notice = document.getElementById('auth-session-feedback');
          if (!notice) {
            notice = document.createElement('p');
            notice.id = 'auth-session-feedback';
            notice.setAttribute('role', 'alert');
            notice.setAttribute('aria-live', 'polite');
            const main = document.querySelector('main');
            if (main) main.prepend(notice);
          }
          feedback(notice, 'Não foi possível sair. Verifique sua conexão e tente novamente.', true);
          if (original) link.setAttribute('aria-label', original);
        } finally {
          link.removeAttribute('aria-disabled');
        }
      });
    });

    const form = document.getElementById('auth-form');
    if (!form) return;
    const notice = document.getElementById('auth-feedback');
    const submit = document.getElementById('auth-submit');
    const nameGroup = document.getElementById('auth-name-group');
    const name = document.getElementById('auth-name');
    const email = document.getElementById('auth-email');
    const password = document.getElementById('auth-password');
    const tabs = document.querySelectorAll('[data-auth-mode]');
    let mode = 'login';
    let busy = false;

    function chooseMode(nextMode) {
      if (busy) return;
      mode = nextMode;
      const registering = mode === 'cadastro';
      nameGroup.hidden = !registering;
      name.required = registering;
      password.autocomplete = registering ? 'new-password' : 'current-password';
      submit.textContent = registering ? 'Criar conta' : 'Entrar';
      tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.authMode === mode)));
      notice.textContent = '';
      notice.className = 'form-feedback';
      if (initialized && !client) {
        feedback(notice, 'O acesso à conta ainda não está disponível. Você pode continuar nas aulas sem entrar.');
      }
    }

    tabs.forEach(tab => tab.addEventListener('click', () => chooseMode(tab.dataset.authMode)));
    chooseMode('login');
    submit.disabled = true;

    ready.then(state => {
      if (state.user) { window.location.assign('./produtos.html'); return; }
      if (!state.client) {
        feedback(notice, 'O acesso à conta ainda não está disponível. Você pode continuar nas aulas sem entrar.');
        return;
      }
      submit.disabled = false;
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || submit.disabled) return;
      if (!form.reportValidity()) return;
      if (mode === 'cadastro' && !name.value.trim()) {
        feedback(notice, 'Informe seu nome para criar a conta.', true);
        name.focus();
        return;
      }
      busy = true;
      submit.disabled = true;
      form.setAttribute('aria-busy', 'true');
      tabs.forEach(tab => { tab.disabled = true; });
      feedback(notice, 'Aguarde enquanto verificamos seu acesso…');
      try {
        const data = mode === 'cadastro'
          ? await cadastro(email.value, password.value, name.value)
          : await login(email.value, password.value);
        password.value = '';
        if (data.session) {
          window.location.assign('./produtos.html');
        } else {
          feedback(notice, 'Cadastro recebido. Confira seu e-mail para confirmar a conta e depois entre.');
        }
      } catch (error) {
        feedback(notice, authError(error), true);
      } finally {
        busy = false;
        submit.disabled = false;
        form.removeAttribute('aria-busy');
        tabs.forEach(tab => { tab.disabled = false; });
      }
    });
  });
})();
