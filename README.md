# Web Design & Development — Agency Website

A production-ready React + Vite business website for a professional web design and development service serving businesses across India through remote services.

The website showcases business website development, e-commerce websites, landing pages, portfolio websites, custom web applications, website redesign, responsive design, and website maintenance services.

## Tech stack

- React 18 (Vite build)
- Plain CSS3 with a custom design-token system (no UI framework, no Tailwind)
- Semantic HTML5, SEO metadata, JSON-LD `ProfessionalService` structured data
- Light/dark mode, scroll-reveal animations, mobile-first responsive layout

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # outputs to /dist
npm run preview     # preview the production build
```

## Project structure

```
├── index.html                 # SEO meta tags, OG tags, JSON-LD, font links
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
└── src/
    ├── App.jsx                 # page composition
    ├── main.jsx                # React entry point
    ├── index.css                # design tokens + all component styles
    ├── useReveal.js             # scroll-reveal IntersectionObserver hook
    ├── data/
    │   ├── services.js
    │   ├── projects.js
    │   └── content.js           # testimonials, process, FAQ, business types
    └── components/
        ├── Navbar.jsx, Hero.jsx, Services.jsx, Projects.jsx,
        ├── Technologies.jsx, About.jsx, LocalBusiness.jsx, WhyChooseUs.jsx,
        ├── Testimonials.jsx, FAQ.jsx, Contact.jsx, Footer.jsx,
        └── FloatingButtons.jsx, Icons.jsx
```

## Before going live — replace these placeholders

The following are intentionally left as clearly-marked placeholders and **must** be updated with
real information before launch:

1. **Phone / WhatsApp number** — currently `+91 7644832949` / `917644832949` in
   `Hero.jsx`, `Contact.jsx`, `FloatingButtons.jsx` and `Footer.jsx`.
2. **Email address** — `webdesigndevelopment001@gmail.com` in `Contact.jsx`.
3. **Domain** — `webdesigndevelopment001@gmail.com` used in `index.html` (canonical, OG tags, JSON-LD)
   and `public/sitemap.xml`. Update to your real domain.
4. **Contact form backend** — the form in `Contact.jsx` is currently front-end only (no data is
   sent anywhere). Wire it to a real endpoint before launch, e.g.:
   - [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) for a no-backend option, or
   - your own API route / serverless function.
5. **Project links** — `src/data/projects.js` has `liveDemo`/`github` set to `"#"`. Replace with
   real URLs, or set a field to `null` to hide that button automatically.
6. **Testimonials** — `src/data/content.js` ships with clearly labeled placeholder testimonials.
   Replace with genuine client reviews as they come in; do not fabricate reviews.
7. **Social links** — GitHub/LinkedIn URLs in `Footer.jsx` currently point to the generic
   homepages; update to your actual profiles.
8. **OG image** — `index.html` references `/og-cover.png`, which is not included. Add a
   1200×630px social preview image to `public/og-cover.png`.

## Deployment

**Vercel / Netlify:** connect the repo, build command `npm run build`, output directory `dist`.

**GitHub Pages:**

```bash
npm run build
# then push the contents of /dist to a `gh-pages` branch, or use the `gh-pages` npm package
```

## Notes on content honesty

- Portfolio projects are labeled **"Demo Project"** in the UI — they are not presented as paid
  client work.
- Testimonials are explicit placeholders, not fabricated reviews.
- No fake office address is used anywhere; only the service-area list is shown.
