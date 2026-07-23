/* ==========================================================================
   Branvoy — main.js  (ES module entry point)

   Structure:
     data/          — content arrays (portfolio, gallery, reviews)
     components/    — reusable render classes (WorkCard, GalleryItem, TestimonialCard)
     pages/         — one render function per page section
     router.js      — SPA page switcher
     navbar.js      — scroll shadow + mobile menu
     form.js        — contact form (Formspree AJAX)
     lightbox.js    — full-screen photo viewer
     likes.js       — Firebase real-time heart reactions
     reveal.js      — scroll-reveal animations

   To add a new portfolio project  → edit data/portfolio.js
   To add a new gallery photo      → edit data/gallery.js
   To add a new review             → edit data/reviews.js
   ========================================================================== */

/* ── Page renderers ─────────────────────────────────────────────────────── */
import { renderAbout }     from './pages/about.js?v=42';
import { renderServices }  from './pages/services.js?v=42';
import { renderPortfolio } from './pages/portfolio-tl.js?v=42';
import { renderReviews }   from './pages/reviews.js?v=42';
import { renderContact }   from './pages/contact.js?v=42';

/* ── Feature modules ────────────────────────────────────────────────────── */
import { initRouter }   from './router.js?v=42';
import { initNavbar }   from './navbar.js?v=42';
import { initForm }     from './form.js?v=42';
import { initLightbox } from './lightbox.js?v=42';
import { initLikes }    from './likes.js?v=42';
import { initReveal }   from './reveal.js?v=42';

/* ── 1. Render all page sections (home page stays in HTML for instant load) */
renderAbout();
renderServices();
renderPortfolio();
renderReviews();
renderContact();

/* ── 2. Wire up interactive features (must run after content is in the DOM) */
initRouter();
initNavbar();
initForm();
initLightbox();
initLikes();
initReveal();
