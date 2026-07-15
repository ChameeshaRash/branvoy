/* ==========================================================================
   Branvoy — router.js
   SPA page switcher. Responds to any element with [data-page] attribute.
   ========================================================================== */

export function initRouter() {
  const pages    = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-links [data-page]');

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));

    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
    } else {
      /* Fallback to home if the id doesn't match anything */
      const home = document.getElementById('page-home');
      if (home) { home.classList.add('active'); pageId = 'home'; }
    }

    window.scrollTo({ top: 0 });

    navLinks.forEach(link =>
      link.classList.toggle('active-link', link.dataset.page === pageId)
    );
  }

  /* Delegate all [data-page] clicks on the document */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-page]');
    if (!el) return;
    e.preventDefault();
    showPage(el.dataset.page);

    /* Close mobile menu if open */
    const mobileNav = document.getElementById('navLinks');
    if (mobileNav) mobileNav.classList.remove('open');
  });

  /* Boot on home */
  showPage('home');
}
