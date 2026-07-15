/* ==========================================================================
   Branvoy — pages/about.js
   Renders the About page (founder bio) into #page-about.
   ========================================================================== */

export function renderAbout() {
  const el = document.getElementById('page-about');
  if (!el) return;

  el.innerHTML = `
    <section class="about" id="about">
      <div class="founder-split">

        <div class="founder-copy">
          <span class="eyebrow">Meet the Founder</span>
          <h2 class="founder-name">Chameesha<br>Rashani</h2>
          <p class="founder-role">Founder &amp; Director, Branvoy</p>
          <div class="founder-divider"></div>
          <p>With a background in Physical Science (ICT) from the University of Sri Jayewardenepura, I started my career in mobile development. Curious by nature, I kept exploring new technologies until I found where I truly belonged.</p>
          <p>In 2024, I left my job to pursue that passion full time and launched <strong>Tip Voyage</strong>, a tech channel sharing practical insights on digital trends, AI tools, and emerging technologies.</p>
          <p>That journey led me to go further. In 2025, I founded Branvoy. What began as a solo project has grown into a dedicated team, ready to help brands grow through strategic content, social media management, and digital solutions.</p>
          <p>Development remains a core part of who I am, and that technical mindset shapes how we think and work. We partner closely with businesses to build strategies, create content, and drive real, measurable growth. Whether you are just starting out or ready to scale, we are here for you.</p>
          <div class="btn-row" style="margin-top:32px;">
            <a href="#" data-page="contact" class="btn btn-primary">Work With Us</a>
            <a href="#" data-page="services" class="btn btn-outline">Our Services</a>
          </div>
        </div>

        <div class="founder-visual">
          <img src="assets/images/chameesha.jpg" alt="Chameesha Rashani — Founder of Branvoy" class="founder-photo" loading="lazy" width="800" height="1000" />
        </div>

      </div>
    </section>`;
}
