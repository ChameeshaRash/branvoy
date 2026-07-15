/* ==========================================================================
   Branvoy — components/WorkCard.js
   Reusable portfolio work-card.
   Usage:  WorkCard.render({ initials, name, location, tags, year })
   ========================================================================== */

export class WorkCard {
  /**
   * @param {{ initials: string, name: string, location: string, tags: string[], year: number }} item
   * @returns {string} HTML string
   */
  static render({ initials, name, location, tags, year }) {
    const tagHtml = tags.map(t => `<span>${t}</span>`).join('');
    return `
      <div class="work-card">
        <div class="work-initial">${initials}</div>
        <div class="work-body">
          <h4>${name}</h4>
          <span class="work-location">${location}</span>
          <div class="work-tags">${tagHtml}</div>
        </div>
        <span class="work-year">${year}</span>
      </div>`;
  }
}
