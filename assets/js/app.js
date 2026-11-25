// app.js — Funcionalidades globais do Antigravity Lab

// Configuração Oficial do WhatsApp
const WHATSAPP_CONFIG = {
  phone: '551151922878',
  baseUrl: 'https://wa.me/551151922878'
};

/**
 * Gera URL codificada para wa.me com mensagem
 * @param {string} message 
 * @returns {string}
 */
function createWhatsAppUrl(message) {
  return `${WHATSAPP_CONFIG.baseUrl}?text=${encodeURIComponent(message)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de ícones Lucide
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Destaque visual da página ativa na navegação (sidebar e menu mobile)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetFile = href.split('/').pop();
    
    const isCurrent = (currentPath === targetFile) || 
                      (currentPath === '' && targetFile === 'index.html') ||
                      (currentPath === 'index.html' && targetFile === './');
    
    if (isCurrent) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else if (!link.getAttribute('href').startsWith('#')) {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // Toggle do menu mobile
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-menu');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileNav.classList.toggle('is-open');
    });
  }

  // Botões de copiar comandos (utilizados em github.html)
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy') || '';
      if (!targetText) return;

      navigator.clipboard.writeText(targetText).then(() => {
        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<i data-lucide="check"></i> Copiado!';
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      }).catch(() => {
        /* Fallback caso permissão de clipboard seja negada */
      });
    });
  });

  // Atualização dinâmica do botão flutuante de WhatsApp baseado no contexto da página
  const floatingWhatsapp = document.getElementById('whatsapp-floating-btn');
  if (floatingWhatsapp) {
    let contextMessage = 'Olá! Conheci o Antigravity Lab e gostaria de obter mais informações sobre o curso.';
    
    if (currentPath === 'sobre.html') {
      contextMessage = 'Olá! Estou no Antigravity Lab e tenho dúvidas sobre a proposta educacional do curso.';
    } else if (currentPath === 'produtos.html') {
      contextMessage = 'Olá! Estou navegando pelo catálogo de aulas do Antigravity Lab e gostaria de tirar dúvidas.';
    } else if (currentPath === 'github.html') {
      contextMessage = 'Olá! Estou consultando o Guia Git & GitHub do Antigravity Lab e gostaria de ajuda com versionamento.';
    } else if (currentPath === 'contato.html') {
      contextMessage = 'Estou vendo o seu curso e está maravilhoso continue assim Dr Ednei';
    }

    floatingWhatsapp.href = createWhatsAppUrl(contextMessage);
  }

  // Integração dinâmica do formulário em contato.html com o WhatsApp
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      
      const name = (document.getElementById('name') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const message = (document.getElementById('message') || {}).value || '';

      if (!name.trim() || !email.trim() || !message.trim()) {
        contactFeedback.className = 'form-feedback is-visible error';
        contactFeedback.innerHTML = '<strong>Atenção:</strong> Por favor, preencha todos os campos obrigatórios.';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        contactFeedback.className = 'form-feedback is-visible error';
        contactFeedback.innerHTML = '<strong>E-mail inválido:</strong> Por favor, informe um endereço de e-mail válido.';
        return;
      }

      // Monta mensagem estruturada conforme especificação da Fase 5
      const structuredMessage = `Olá! Entro em contato pelo site Antigravity Lab.

Nome: ${name.trim()}
E-mail: ${email.trim()}

Mensagem:
${message.trim()}`;

      const waUrl = createWhatsAppUrl(structuredMessage);

      // Feedback transparente ao usuário antes de abrir a aba
      contactFeedback.className = 'form-feedback is-visible info';
      contactFeedback.innerHTML = '<strong>Dados validados!</strong> Abrindo o WhatsApp para você concluir o envio da mensagem... Caso a janela não abra automaticamente, <a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" style="text-decoration:underline; font-weight:700; color:inherit;">clique aqui para abrir</a>.';

      // Abre o WhatsApp com a mensagem pronta
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
