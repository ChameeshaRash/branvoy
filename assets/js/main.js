/* ==========================================================================
   Branvoy — main.js  (ES module entry point)

   Structure:
     data/          — content arrays (portfolio, gallery, reviews)
     components/    — reusable render classes (WorkCard, GalleryItem, TestimonialCard)
     pages/         — one render function per page section
     cursor.js      — custom two-part cursor
     router.js      — SPA page switcher
     navbar.js      — scroll shadow + mobile menu
     form.js        — contact form (Formspree AJAX)
     lightbox.js    — full-screen photo viewer
     likes.js       — Firebase real-time heart reactions

   To add a new portfolio project  → edit data/portfolio.js
   To add a new gallery photo      → edit data/gallery.js
   To add a new review             → edit data/reviews.js
   ========================================================================== */

/* ── Page renderers ─────────────────────────────────────────────────────── */
import { renderAbout }     from './pages/about.js';
import { renderServices }  from './pages/services.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderReviews }   from './pages/reviews.js';
import { renderContact }   from './pages/contact.js';

/* ── Feature modules ────────────────────────────────────────────────────── */
import { initCursor }   from './cursor.js';
import { initRouter }   from './router.js';
import { initNavbar }   from './navbar.js';
import { initForm }     from './form.js';
import { initLightbox } from './lightbox.js';
import { initLikes }    from './likes.js';

/* ── 1. Render all page sections (home page stays in HTML for instant load) */
renderAbout();
renderServices();
renderPortfolio();
renderReviews();
renderContact();

/* ── 2. Wire up interactive features (must run after content is in the DOM) */
initCursor();
initRouter();
initNavbar();
initForm();
initLightbox();
initLikes();
