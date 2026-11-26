// Preferências do catálogo: independentes do progresso e da conta do aluno.
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('course-menu');
    const grid = document.getElementById('course-layout');
    const header = document.getElementById('course-menu-header');
    const toggle = document.getElementById('course-menu-toggle');
    const pin = document.getElementById('course-menu-pin');
    const pinLabel = document.getElementById('course-menu-pin-label');
    const list = document.getElementById('lesson-list');
    // No catálogo, cada trilha tem seu próprio desdobramento nativo.
    if (list && menu && grid && pin && pinLabel && !toggle) {
      // A fixação é uma escolha desta visita; a leitura ampla é o padrão.
      let pinned = false;
      function paintPin() {
        menu.classList.toggle('is-pinned', pinned);
        grid.classList.add('has-trail-navigation');
        grid.classList.toggle('course-nav-pinned', pinned);
        pin.setAttribute('aria-pressed', String(pinned));
        pinLabel.textContent = pinned ? 'Desafixar' : 'Fixar';
        pin.title = pinned ? 'Desafixar o menu de aulas' : 'Fixar o menu de aulas durante a rolagem';
      }
      pin.addEventListener('click', () => {
        pinned = !pinned;
        list.querySelectorAll('details[data-trail]').forEach(trail => { trail.open = pinned; });
        paintPin();
      });
      list.addEventListener('click', event => {
        if (pinned || !event.target.closest('[data-lesson]')) return;
        list.querySelectorAll('details[data-trail]').forEach(trail => { trail.open = false; });
      });
      paintPin();
      return;
    }
    if (!menu || !grid || !header || !toggle || !pin || !pinLabel) return;

    const key = 'antigravity-lab-course-menu-v1';
    let open = !window.matchMedia('(max-width: 900px)').matches;
    let pinned = false;
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && typeof saved.open === 'boolean') open = saved.open;
      if (saved && typeof saved.pinned === 'boolean') pinned = saved.pinned;
    } catch (error) { /* As preferências padrão continuam disponíveis. */ }

    function paint(save = true) {
      grid.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', `${open ? 'Recolher' : 'Abrir'} conteúdo interativo`);
      pin.setAttribute('aria-pressed', String(pinned));
      pinLabel.textContent = pinned ? 'Desafixar' : 'Fixar';
      pin.title = pinned ? 'Desafixar o menu durante a rolagem' : 'Manter o menu visível durante a rolagem';
      menu.classList.toggle('is-pinned', pinned);
      if (save) {
        try { localStorage.setItem(key, JSON.stringify({ open, pinned })); }
        catch (error) { /* Os controles funcionam mesmo com armazenamento bloqueado. */ }
      }
    }

    toggle.addEventListener('click', () => { open = !open; paint(); });
    pin.addEventListener('click', () => {
      pinned = !pinned;
      if (pinned) open = true;
      paint();
    });
    header.addEventListener('keydown', event => {
      if (event.key === 'Escape' && open) {
        open = false;
        paint();
        toggle.focus();
      }
    });
    if (list) list.addEventListener('click', event => {
      if (!event.target.closest('[data-lesson]')) return;
      if (window.matchMedia('(max-width: 900px)').matches) {
        const detail = document.getElementById('lesson-detail');
        if (detail) detail.scrollIntoView({ block: 'start' });
      }
    });

    header.hidden = false;
    paint(false);
  });
})();
