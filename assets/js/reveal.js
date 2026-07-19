/* ==========================================================================
   Branvoy — reveal.js
   Scroll-reveal for anything marked [data-reveal].
   Elements start hidden via CSS; this observer adds .in when they enter
   the viewport. Works across SPA pages: hidden pages never intersect, so
   their elements reveal the first time the page becomes visible.
   ========================================================================== */

export function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  /* Reduced motion (or no IO support): show everything immediately */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

  els.forEach(el => io.observe(el));
}
