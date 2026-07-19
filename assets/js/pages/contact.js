/* ==========================================================================
   Branvoy — pages/contact.js
   Renders the Contact page into #page-contact.
   ========================================================================== */

export function renderContact() {
  const el = document.getElementById('page-contact');
  if (!el) return;

  el.innerHTML = `
    <section id="contact">
      <div class="wrap contact-grid">

        <div class="contact-info">
          <span class="eyebrow" style="display:inline-flex;margin-bottom:14px;" data-reveal>Get in Touch</span>
          <h2 data-reveal>Let's build something <em>great</em>.</h2>
          <p data-reveal>Tell us about your business and we'll get back to you with a customized proposal.</p>

          <a href="tel:+94760065900" class="contact-row" data-reveal>
            <span class="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z"/></svg>
            </span>
            <strong>+94 76 006 5900</strong>
          </a>

          <a href="mailto:chameesha@branvoy.com" class="contact-row" data-reveal>
            <span class="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M2 5.5A1.5 1.5 0 013.5 4h17A1.5 1.5 0 0122 5.5v13a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-13zm2.2.2l7.3 6.1 7.3-6.1H4.2zm15.8 1.4l-7.9 6.6a1 1 0 01-1.2 0L3 7.1v11.2h17V7.1z"/></svg>
            </span>
            <strong>chameesha@branvoy.com</strong>
          </a>

          <div class="qr-card" data-reveal>
            <img src="assets/images/qr-code-vcard.png" alt="QR code with Branvoy contact details" class="qr-img" width="320" height="320" loading="lazy" />
            <div class="qr-copy">
              <strong>Scan to save our contact</strong>
              <span>Point your phone camera at the code and our details are yours, no typing needed.</span>
            </div>
          </div>

          <p class="contact-note" data-reveal>Sri Lanka &nbsp;·&nbsp; Working Worldwide</p>
        </div>

        <form id="contactForm" action="https://formspree.io/f/mykqpjja" method="POST" data-reveal novalidate>
          <input type="hidden" name="_cc" value="chamrashani@gmail.com" />
          <input type="text"  name="name"    placeholder="Your Name"  required />
          <input type="email" name="email"   placeholder="Your Email" required />
          <select name="service" required>
            <option value="" disabled selected>Select a Service</option>
            <option>Social Media Management</option>
            <option>Website Design &amp; Development</option>
            <option>Content Creation &amp; Photography</option>
            <option>Social Media + Website (Both)</option>
            <option>Other / Not Sure Yet</option>
          </select>
          <textarea name="message" placeholder="Tell us about your project..." required></textarea>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>

      </div>
    </section>`;
}
