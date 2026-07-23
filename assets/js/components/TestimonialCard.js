/* ==========================================================================
   Branvoy — components/TestimonialCard.js
   Reusable client testimonial card.
   Usage:  TestimonialCard.render({ initial, name, role, text })
   ========================================================================== */

export class TestimonialCard {
  /**
   * @param {{ initial: string, name: string, role: string, text: string }} item
   * @returns {string} HTML string
   */
  static render({ initial, name, role, text }) {
    return `
      <div class="testimonial-card" data-reveal>
        <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="testimonial-text">"${text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${initial}</div>
          <div>
            <div class="testimonial-name">${name}</div>
            <div class="testimonial-role">${role}</div>
          </div>
        </div>
      </div>`;
  }
}
