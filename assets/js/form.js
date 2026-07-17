/* ==========================================================================
   Branvoy — form.js
   Handles the contact form submission via Formspree (AJAX, no page reload).
   ========================================================================== */

export function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn      = form.querySelector('.submit-btn');
    const original = btn.textContent;

    btn.textContent = 'Sending…';
    btn.disabled    = true;

    fetch(form.action, {
      method:  'POST',
      headers: { Accept: 'application/json' },
      body:    new FormData(form),
    })
    .then(res => {
      btn.textContent = res.ok ? 'Message Sent ✓' : 'Something went wrong';
      if (res.ok) {
        form.reset();
        /* GA4 conversion — contact form submitted */
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            event_category: 'Contact',
            event_label:    'Contact Form Submission',
          });
        }
      }
    })
    .catch(() => {
      btn.textContent = 'Something went wrong';
    })
    .finally(() => {
      btn.disabled = false;
      setTimeout(() => { btn.textContent = original; }, 4000);
    });
  });
}
