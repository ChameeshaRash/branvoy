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
import { renderAbout }     from './pages/about.js?v=30';
import { renderServices }  from './pages/services.js?v=30';
import { renderPortfolio } from './pages/portfolio.js?v=30';
import { renderReviews }   from './pages/reviews.js?v=30';
import { renderContact }   from './pages/contact.js?v=30';

/* ── Feature modules ────────────────────────────────────────────────────── */
import { initCursor }   from './cursor.js?v=30';
import { initRouter }   from './router.js?v=30';
import { initNavbar }   from './navbar.js?v=30';
import { initForm }     from './form.js?v=30';
import { initLightbox } from './lightbox.js?v=30';
import { initLikes }    from './likes.js?v=30';

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
