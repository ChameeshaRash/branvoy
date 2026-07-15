/* ==========================================================================
   Branvoy — pages/services.js
   Renders the Services page into #page-services.
   ========================================================================== */

export function renderServices() {
  const el = document.getElementById('page-services');
  if (!el) return;

  el.innerHTML = `
    <section id="services">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">What We Offer</span>
          <h2>Services built for growth</h2>
          <p>From day-to-day social media management to full website builds, everything your brand needs to show up online.</p>
        </div>

        <div class="services-grid">

          <div class="service-card">
            <span class="tag">Monthly Retainer</span>
            <h3>Social Media Management</h3>
            <ul>
              <li>3 social media platforms (Instagram, Facebook, TikTok or your choice) — additional platforms available</li>
              <li>2 to 4 posts/reels per week, on-site content creation</li>
              <li>Daily engagement-focused stories</li>
              <li>Social strategy &amp; competitor analysis</li>
              <li>1 ad campaign per week, including setup, creatives &amp; optimization</li>
              <li>Google review &amp; customer interaction replies</li>
              <li>Profile optimization &amp; monthly performance reports</li>
            </ul>
            <div class="price-tag">
              <strong>Pricing tailored to your brand</strong>
              <span style="display:block;font-size:13px;margin-top:6px;font-weight:400;">Varies based on platforms, content volume, and requirements</span>
            </div>
          </div>

          <div class="service-card">
            <span class="tag">Project-Based</span>
            <h3>Website Design &amp; Development</h3>
            <ul>
              <li>Modern, responsive website design</li>
              <li>Custom UI/UX, including hospitality-focused builds</li>
              <li>Mobile-friendly, performance-optimized layouts</li>
              <li>Booking or inquiry-focused user experience</li>
              <li>Custom features &amp; integrations as needed</li>
            </ul>
            <div class="price-tag">
              <strong>Based on project scope</strong>
              <span style="display:block;font-size:13px;margin-top:6px;font-weight:400;">Pricing depends on pages, features, and complexity</span>
            </div>
          </div>

        </div>

        <div class="page-cta">
          <a href="#" data-page="contact" class="btn btn-primary">Get a Custom Quote</a>
        </div>
      </div>
    </section>`;
}
