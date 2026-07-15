/* ==========================================================================
   Branvoy — navbar.js
   Adds a shadow to the header on scroll + handles the mobile hamburger menu.
   ========================================================================== */

export function initNavbar() {
  const nav = document.querySelector('header');
  if (!nav) return;

  /* Shadow on scroll */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* Run once on load in case page is already scrolled */

  /* Mobile hamburger */
  const toggle   = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  /* Close when clicking anywhere outside the header */
  document.addEventListener('click', e => {
    if (!e.target.closest('header')) navLinks.classList.remove('open');
  });
}
