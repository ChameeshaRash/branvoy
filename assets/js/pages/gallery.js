/* ==========================================================================
   Branvoy — pages/gallery.js
   Renders the Gallery page using GalleryItem component + GALLERY data.
   To add/edit a photo → update data/gallery.js only.
   ========================================================================== */

import { GALLERY }     from '../data/gallery.js';
import { GalleryItem } from '../components/GalleryItem.js';

export function renderGallery() {
  const el = document.getElementById('page-gallery');
  if (!el) return;

  el.innerHTML = `
    <section class="gallery-section">
      <div class="container">

        <div class="gallery-header">
          <span class="gallery-eyebrow">Behind the Lens</span>
          <h1 class="gallery-title">Moments We've Captured</h1>
          <p class="gallery-sub">A personal collection of stills — shot on camera and mobile, across Sri Lanka's most beautiful corners.</p>
          <div class="gallery-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Some client work is not displayed here due to confidentiality agreements. Full portfolio available upon request.
          </div>
        </div>

        <div class="gallery-grid">
          ${GALLERY.map(item => GalleryItem.render(item)).join('')}
        </div>

        <div class="page-cta">
          <p style="color:var(--muted);margin-bottom:20px;">Like what you see? Let's create something together.</p>
          <a href="#" data-page="contact" class="btn btn-primary">Start a Project</a>
        </div>

      </div>
    </section>`;
}
