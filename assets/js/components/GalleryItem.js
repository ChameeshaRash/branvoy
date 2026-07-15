/* ==========================================================================
   Branvoy — components/GalleryItem.js
   Reusable gallery grid tile with like button.
   Usage:  GalleryItem.render({ id, src, alt, location, classes })
   ========================================================================== */

const HEART_SVG = `<svg class="heart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

export class GalleryItem {
  /**
   * @param {{ id: string, src: string, alt: string, location: string, classes: string[] }} item
   * @returns {string} HTML string
   */
  static render({ id, src, alt, location, classes = [] }) {
    const cls = ['gallery-item', ...classes].join(' ');
    return `
      <div class="${cls}" data-location="${location}" data-img="${id}">
        <img src="${src}" alt="${alt}" loading="lazy" />
        <div class="gallery-overlay"><span class="gallery-tag">@${location}</span></div>
        <button class="like-btn" data-img="${id}" aria-label="Like this photo">
          ${HEART_SVG}
          <span class="like-count"></span>
        </button>
      </div>`;
  }
}
