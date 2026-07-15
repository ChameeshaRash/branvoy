/* ==========================================================================
   Branvoy — cursor.js
   Custom two-part cursor: instant dot + laggy glowing ring.
   Only activates on mouse/trackpad devices (pointer: fine).
   ========================================================================== */

export function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth  / 2;
  let mouseY = window.innerHeight / 2;
  let ringX  = mouseX;
  let ringY  = mouseY;

  /* Dot follows cursor instantly */
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  /* Ring lerps behind the dot for the trailing glow effect */
  (function tick() {
    ringX += (mouseX - ringX) * 0.10;
    ringY += (mouseY - ringY) * 0.10;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(tick);
  }());

  /* Enlarge ring when hovering interactive elements */
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, [data-page], input, textarea, select, label')) {
      dot.classList.add('is-hovering');
      ring.classList.add('is-hovering');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, [data-page], input, textarea, select, label')) {
      dot.classList.remove('is-hovering');
      ring.classList.remove('is-hovering');
    }
  });

  /* Hide when mouse leaves the viewport */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}
