/* ==========================================================================
   Branvoy — lightbox.js
   Full-screen photo viewer.  Opens when the user taps:
     • A timeline photo  (.tl-photo[data-img])
     • A gallery tile    (.gallery-item[data-img])   ← kept for future use
   Shows a real-time heart/like button powered by Firebase RTDB.
   ========================================================================== */

import { GALLERY } from './data/gallery.js';

const STORAGE_KEY = 'branvoy_liked';

function getLiked() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveLiked(obj) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch { /* storage blocked */ }
}

export function initLightbox() {
  const lb        = document.getElementById('lightbox');
  const img       = document.getElementById('lightboxImg');
  const caption   = document.getElementById('lightboxCaption');
  const btnClose  = document.getElementById('lightboxClose');
  const btnPrev   = document.getElementById('lightboxPrev');
  const btnNext   = document.getElementById('lightboxNext');
  const likeBtn   = document.getElementById('lightboxLikeBtn');
  const likeCount = document.getElementById('lightboxLikeCount');
  if (!lb) return;

  let current  = 0;
  let db       = null;
  let likeUnsub = null;   // cleanup fn for current Firebase listener

  try { db = firebase.database(); } catch (e) { /* Firebase unavailable */ }

  /* ── Like button ─────────────────────────────────────────────── */

  /** Detach old Firebase listener and attach a fresh one for imgId. */
  function attachLike(imgId) {
    if (!likeBtn) return;

    if (likeUnsub) { likeUnsub(); likeUnsub = null; }

    likeBtn.dataset.img = imgId;
    const liked = getLiked();
    likeBtn.classList.toggle('liked', !!liked[imgId]);
    if (likeCount) likeCount.textContent = '';

    if (!db) return;

    const ref     = db.ref('likes/' + imgId);
    const handler = snap => {
      if (likeCount) {
        const n = snap.val() || 0;
        likeCount.textContent = n > 0 ? n : '';
      }
    };
    ref.on('value', handler);
    likeUnsub = () => ref.off('value', handler);
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (!db) return;
      const imgId = likeBtn.dataset.img;
      if (!imgId) return;

      const liked = getLiked();
      const ref   = db.ref('likes/' + imgId);

      if (liked[imgId]) {
        ref.transaction(cur => Math.max((cur || 1) - 1, 0));
        delete liked[imgId];
        likeBtn.classList.remove('liked');
      } else {
        ref.transaction(cur => (cur || 0) + 1);
        liked[imgId] = true;
        likeBtn.classList.add('liked');
        likeBtn.classList.add('like-pop');
        setTimeout(() => likeBtn.classList.remove('like-pop'), 350);
      }
      saveLiked(liked);
    });
  }

  /* ── Navigation ──────────────────────────────────────────────── */

  function show(idx) {
    current = (idx + GALLERY.length) % GALLERY.length;
    img.style.opacity = '0';
    setTimeout(() => {
      const g = GALLERY[current];
      img.src = g.src;
      img.alt = g.alt;
      caption.textContent = '@' + g.location;
      img.style.opacity   = '1';
      attachLike(g.id);
    }, 80);
  }

  function open(idx) {
    show(idx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if (likeUnsub) { likeUnsub(); likeUnsub = null; }
    setTimeout(() => { img.src = ''; }, 250);
  }

  /* ── Click triggers: timeline photo OR gallery tile ──────────── */

  document.addEventListener('click', e => {
    /* Don't intercept the like button */
    if (e.target.closest('#lightboxLikeBtn')) return;

    /* 1. Timeline photo (.tl-photo[data-img]) */
    const tlPhoto = e.target.closest('.tl-photo[data-img]');
    if (tlPhoto) {
      const idx = GALLERY.findIndex(g => g.id === tlPhoto.dataset.img);
      if (idx !== -1) { open(idx); return; }
    }

    /* 2. Gallery tile (.gallery-item[data-img]) — existing behaviour */
    if (e.target.closest('.like-btn')) return;
    const tile = e.target.closest('.gallery-item[data-img]');
    if (tile) {
      const idx = GALLERY.findIndex(g => g.id === tile.dataset.img);
      if (idx !== -1) open(idx);
    }
  });

  /* ── Controls ────────────────────────────────────────────────── */

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click',  e => { e.stopPropagation(); show(current - 1); });
  btnNext.addEventListener('click',  e => { e.stopPropagation(); show(current + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  /* ── Keyboard ─────────────────────────────────────────────────── */

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft')  show(current - 1);
  });

  /* ── Touch swipe ──────────────────────────────────────────────── */

  let startX = 0;
  lb.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) dx < 0 ? show(current + 1) : show(current - 1);
  });
}
