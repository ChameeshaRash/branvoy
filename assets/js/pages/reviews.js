/* ==========================================================================
   Branvoy — pages/reviews.js
   Renders the Reviews page using TestimonialCard component + REVIEWS data.
   To add/edit a testimonial → update data/reviews.js only.
   ========================================================================== */

import { REVIEWS }          from '../data/reviews.js';
import { TestimonialCard }  from '../components/TestimonialCard.js';

export function renderReviews() {
  const el = document.getElementById('page-reviews');
  if (!el) return;

  el.innerHTML = `
    <section class="testimonials" id="testimonials">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">Client Feedback</span>
          <h2>What our clients say</h2>
          <p>Real words from the businesses and individuals we've had the privilege to work with.</p>
        </div>
        <div class="testimonials-grid">
          ${REVIEWS.map(item => TestimonialCard.render(item)).join('')}
        </div>
      </div>
    </section>`;
}
