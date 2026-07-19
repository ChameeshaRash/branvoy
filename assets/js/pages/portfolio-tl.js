/* ==========================================================================
   Branvoy — pages/portfolio.js  v30
   Vertical timeline layout: project entries on a centre spine with the
   8 gallery photos scattered left / right between them.
   To add a project → data/portfolio.js  |  To add a photo → data/gallery.js
   ========================================================================== */

import { PORTFOLIO } from '../data/portfolio.js?v=42';
import { GALLERY }   from '../data/gallery.js?v=42';

/* ------------------------------------------------------------------
   TL_LAYOUT  — one entry per portfolio item (same index order)
   photos:   array of GALLERY indices to show alongside this entry
             (max 2 per node; [] = text only)
   textLeft: true  → project text on LEFT,  photos on RIGHT
             false → project text on RIGHT, photos on LEFT
------------------------------------------------------------------ */
const TL_LAYOUT = [
  { photos: [0, 1], textLeft: false }, // 01 mettā house
  { photos: [],     textLeft: true  }, // 02 Yaka Surf Club
  { photos: [2],    textLeft: false }, // 03 Beach Break Hostel & Restaurant
  { photos: [3, 4], textLeft: true  }, // 04 Melinda — Agency Project
  { photos: [],     textLeft: false }, // 05 Daymoon Surfing School
  { photos: [5],    textLeft: true  }, // 06 The Grill Bar Restaurant
  { photos: [6, 7], textLeft: false }, // 07 Lara — Personal Brand
  { photos: [],     textLeft: true  }, // 08 Munchee Surf Camp
  { photos: [],     textLeft: false }, // 09 Beach Break Surf Camp
];

/* Zoom icon shown on hover — clicking opens the lightbox */
const ZOOM_ICON = `<div class="tl-photo-zoom" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
    <line x1="11" y1="8" x2="11" y2="14"/>
    <line x1="8"  y1="11" x2="14" y2="11"/>
  </svg>
</div>`;

/** Build one clickable photo div (adds data-img so lightbox can open it). */
function photoDiv(g, extraClass = '') {
  const cls = ['tl-photo', extraClass].filter(Boolean).join(' ');
  return `<div class="${cls}" data-img="${g.id}" role="button" tabindex="0"
               aria-label="View ${g.alt} in full screen">
    <img src="${g.src}" alt="${g.alt}" loading="lazy" />
    ${ZOOM_ICON}
  </div>`;
}

/* Build the photo block for a given list of gallery indices */
function photoBlock(idxs) {
  if (!idxs.length) return '';
  const imgA = GALLERY[idxs[0]];

  if (idxs.length === 1) {
    return `<div class="tl-photos tl-photos--single">${photoDiv(imgA)}</div>`;
  }

  const imgB = GALLERY[idxs[1]];
  return `<div class="tl-photos tl-photos--dual">
    ${photoDiv(imgA, 'tl-photo--main')}
    ${photoDiv(imgB, 'tl-photo--accent')}
  </div>`;
}

/* Build one full timeline node */
function tlNode(item, i) {
  const cfg       = TL_LAYOUT[i] || { photos: [], textLeft: i % 2 === 1 };
  const num       = String(i + 1).padStart(2, '0') + '_';
  const tags      = item.tags.map(t => `<span>${t}</span>`).join('');
  const { photos, textLeft } = cfg;

  const textHtml = `
    <div class="tl-entry${textLeft ? ' tl-entry--left' : ''}">
      <span class="tl-num">${num}</span>
      <h3 class="tl-name">${item.name}</h3>
      <p class="tl-sub">${item.location} · ${item.year}</p>
      <div class="tl-tags">${tags}</div>
    </div>`;

  const photosHtml = photoBlock(photos);

  /* textLeft → text in left col, photos in right col; and vice-versa */
  const leftContent  = textLeft ? textHtml : photosHtml;
  const rightContent = textLeft ? photosHtml : textHtml;

  return `
    <div class="tl-node" data-reveal>
      <div class="tl-side tl-side--left">${leftContent}</div>
      <div class="tl-center"><span class="tl-dot"></span></div>
      <div class="tl-side tl-side--right">${rightContent}</div>
    </div>`;
}

export function renderPortfolio() {
  const el = document.getElementById('page-portfolio');
  if (!el) return;

  el.innerHTML = `
    <section class="tl-section">
      <div class="wrap">
        <div class="tl-header" data-reveal>
          <span class="eyebrow">Portfolio</span>
          <h2>Brands we've<br><em>worked with</em></h2>
          <p>From surf camps to villas, restaurants to personal brands, here is a snapshot of the projects we've had the honour to be part of.</p>
          <p class="tl-photo-note">✦ Photos shown are candid moments from our work, not tied to any single project.</p>
        </div>
      </div>

      <div class="tl-body">
        ${PORTFOLIO.map((item, i) => tlNode(item, i)).join('')}
      </div>

      <div class="wrap">
        <div class="page-cta" data-reveal>
          <p style="color:var(--muted);margin-bottom:20px;">Like what you see? Let's create something together.</p>
          <a href="#" data-page="contact" class="btn btn-primary">Start a Project</a>
        </div>
      </div>
    </section>`;
}
