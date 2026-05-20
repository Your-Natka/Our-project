(function initMobileMenu() {
  const menu = document.querySelector('[data-menu]');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');

  if (!menu || !openBtn) return;

  const open = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-menu-open');
  };

  const close = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-menu-open');
  };

  openBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);

  menu.addEventListener('click', e => {
    if (e.target === menu) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      close();
    }
  });

  const mq = window.matchMedia('(min-width: 768px)');
  mq.addEventListener('change', e => {
    if (e.matches) close();
  });
})();
