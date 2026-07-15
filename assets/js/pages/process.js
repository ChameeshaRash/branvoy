/* ==========================================================================
   Branvoy — pages/process.js
   Renders the Process page into #page-process.
   ========================================================================== */

export function renderProcess() {
  const el = document.getElementById('page-process');
  if (!el) return;

  el.innerHTML = `
    <section class="process" id="process">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">How We Work</span>
          <h2>A simple, transparent process</h2>
          <p>No guesswork, just a clear path from first conversation to ongoing growth.</p>
        </div>
        <div class="process-grid">
          <div class="process-step">
            <div class="num">1</div>
            <h4>Discovery</h4>
            <p>We learn your brand, goals, and audience.</p>
          </div>
          <div class="process-step">
            <div class="num">2</div>
            <h4>Strategy</h4>
            <p>A custom plan for content, ads, or your website.</p>
          </div>
          <div class="process-step">
            <div class="num">3</div>
            <h4>Build &amp; Create</h4>
            <p>Content, campaigns, or development gets underway.</p>
          </div>
          <div class="process-step">
            <div class="num">4</div>
            <h4>Grow &amp; Report</h4>
            <p>Monthly insights and continuous optimization.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="cta">
      <div class="wrap">
        <h2>Ready to grow your brand with Branvoy?</h2>
        <p>Let's talk about your goals and build a plan around them.</p>
        <a href="#" data-page="contact" class="btn btn-primary">Get a Free Consultation</a>
      </div>
    </div>`;
}
