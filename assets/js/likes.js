/* ==========================================================================
   Branvoy — likes.js
   Real-time heart/like reactions powered by Firebase Realtime Database.
   - Like counts are stored at /likes/<imageId> in Firebase.
   - A user's own likes are persisted in localStorage (key: 'branvoy_liked').
   - Firebase is loaded as the compat CDN globally before this module runs.
   ========================================================================== */

export function initLikes() {
  /* Firebase compat CDN exposes window.firebase */
  let db;
  try { db = firebase.database(); } catch (e) { return; }

  const STORAGE_KEY = 'branvoy_liked';

  function getLiked() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
  }
  function saveLiked(obj) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch { /* storage blocked */ }
  }

  let liked = getLiked();

  document.querySelectorAll('.like-btn').forEach(btn => {
    const imgId   = btn.dataset.img;
    const countEl = btn.querySelector('.like-count');
    if (!imgId || !countEl) return;

    /* Restore liked state immediately from localStorage */
    if (liked[imgId]) btn.classList.add('liked');

    /* Subscribe to live count updates from Firebase */
    db.ref('likes/' + imgId).on('value', snap => {
      const n = snap.val() || 0;
      countEl.textContent = n > 0 ? n : '';
    });

    /* Toggle like on click */
    btn.addEventListener('click', e => {
      e.stopPropagation(); /* Prevent lightbox from opening */

      const ref = db.ref('likes/' + imgId);

      if (liked[imgId]) {
        /* Unlike — atomic decrement, floor at 0 */
        ref.transaction(cur => Math.max((cur || 1) - 1, 0));
        delete liked[imgId];
        btn.classList.remove('liked');
      } else {
        /* Like — atomic increment + pop animation */
        ref.transaction(cur => (cur || 0) + 1);
        liked[imgId] = true;
        btn.classList.add('liked');
        btn.classList.add('like-pop');
        setTimeout(() => btn.classList.remove('like-pop'), 300);
      }

      saveLiked(liked);
    });
  });
}
