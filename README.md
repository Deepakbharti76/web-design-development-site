# 🌐 Web Design & Development — Agency Website

A modern, production-ready **React + Vite** website for a professional web design and development service, serving businesses **across India** through fully remote, online delivery. 🇮🇳

> ✨ Premium UI · 📱 Mobile-first · ⚡ Fast · 🔍 SEO-friendly · 🌗 Light/Dark mode · 📩 EmailJS enquiries

---

## 📑 Table of Contents

- [🎯 Overview](#-overview)
- [🧰 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [📞 Contact Details](#-contact-details)
- [📩 EmailJS Setup](#-emailjs-setup-contact-form)
- [🔍 SEO](#-seo)
- [🌍 Deployment](#-deployment)
- [✅ Before Going Live](#-before-going-live)
- [🤝 Content Honesty](#-content-honesty)

---

## 🎯 Overview

The website presents the business as a trustworthy, professional agency and is built to turn visitors into enquiries.

| Section                | What it covers                                                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 🏠 **Hero**            | Headline, subheadline, "Get a Free Consultation", "View Our Projects" and WhatsApp CTAs                                                 |
| 🛠️ **Services**        | 8 service cards — business sites, e-commerce, landing pages, portfolios, custom web apps, redesign, responsive development, maintenance |
| 🗂️ **Projects**        | Filterable portfolio of 5 demo projects with tech stack, features, Live Demo and GitHub buttons                                         |
| 💻 **Technologies**    | Frontend, Backend, Database and Tools                                                                                                   |
| 👋 **About + Process** | 6-step workflow, from requirement discussion to maintenance & support                                                                   |
| 🏪 **Businesses**      | Cafes, shops, schools, home businesses, startups, professionals, service businesses                                                     |
| ⭐ **Why Choose Us**   | Responsive design, modern UI, performance, SEO structure and more                                                                       |
| 💬 **Testimonials**    | Clearly marked placeholders until genuine reviews exist                                                                                 |
| ❓ **FAQ**             | Accessible accordion with the most common questions                                                                                     |
| 📬 **Contact**         | Lead form with budget selection, WhatsApp, Call and Email                                                                               |

### 🌟 Highlights

- 🌗 Light and dark mode (follows system preference, with a manual toggle)
- 🎞️ Subtle scroll-reveal animations that respect `prefers-reduced-motion`
- ♿ Keyboard-friendly navigation with visible focus states
- 💬 Floating WhatsApp and Call buttons on every screen
- 🌍 Pan-India, remote-friendly positioning with no fake office address

---

## 🧰 Tech Stack

| Layer            | Technology                                                               |
| ---------------- | ------------------------------------------------------------------------ |
| ⚛️ Framework     | React 18                                                                 |
| ⚡ Build tool    | Vite 5                                                                   |
| 🎨 Styling       | Plain CSS3 with a custom design-token system (no UI framework)           |
| 📩 Form delivery | EmailJS (`@emailjs/browser`)                                             |
| 🔎 SEO           | Semantic HTML5, Open Graph, canonical URL, JSON-LD `ProfessionalService` |

Just **3 runtime packages** (`react`, `react-dom`, `@emailjs/browser`) and **2 dev tools** (`vite`, `@vitejs/plugin-react`), so the site stays small and quick. ⚡

---

## 🚀 Getting Started

**Requirements:** Node.js 18 or newer 🟢

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the dev server  →  http://localhost:5173
npm run dev

# 3️⃣ Create a production build  →  /dist
npm run build

# 4️⃣ Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
web-design-development/
├── 📄 index.html              # SEO meta, Open Graph, JSON-LD, fonts
├── 📄 vite.config.js
├── 📄 package.json
├── 📂 public/
│   ├── 🤖 robots.txt
│   ├── 🗺️ sitemap.xml
│   └── 🖼️ favicon.svg
└── 📂 src/
    ├── 📄 main.jsx            # React entry point
    ├── 📄 App.jsx             # Page composition + theme state
    ├── 🎨 index.css           # Design tokens + all component styles
    ├── 🪝 useReveal.js        # Scroll-reveal IntersectionObserver hook
    ├── 📂 data/
    │   ├── contact.js         # 📞 Phone, WhatsApp, email (single source of truth)
    │   ├── services.js        # 🛠️ Service cards
    │   ├── projects.js        # 🗂️ Portfolio projects
    │   └── content.js         # 💬 Testimonials, process, FAQ, business types
    └── 📂 components/
        ├── Navbar.jsx · Hero.jsx · Services.jsx · Projects.jsx
        ├── Technologies.jsx · About.jsx · LocalBusiness.jsx
        ├── WhyChooseUs.jsx · Testimonials.jsx · FAQ.jsx
        ├── Contact.jsx · Footer.jsx · FloatingButtons.jsx
        └── Icons.jsx
```

---

## 📞 Contact Details

All contact details live in **one file**: `src/data/contact.js`. Edit it once and it updates the hero, floating buttons, contact section and footer. ✅

|                     | Current value         |
| ------------------- | --------------------- |
| 📱 Phone / WhatsApp | `+91 76448 32949`     |
| 📧 Email            | `dk8065296@gmail.com` |

```js
// src/data/contact.js
export const CONTACT = {
  phoneDisplay: "+91 76448 32949",
  phoneDial: "+917644832949",
  whatsappNumber: "917644832949",
  email: "dk8065296@gmail.com",
};
```

> 💡 If you change the email here, also update the `"email"` field in the JSON-LD block of `index.html`.

---

## 📩 EmailJS Setup (Contact Form)

The contact form sends enquiries straight to your inbox with **no backend server**. 🎉
Until EmailJS is configured, the form still works visually but **no email is actually sent**. ⚠️

1. 🆕 Create a free account at [emailjs.com](https://www.emailjs.com)
2. 🔌 Add an **Email Service** (for example, connect Gmail) and copy the **Service ID**
3. 📝 Create an **Email Template** that uses these variables, then copy the **Template ID**:

   | Variable            | Meaning               |
   | ------------------- | --------------------- |
   | `{{from_name}}`     | Visitor's name        |
   | `{{business_name}}` | Their business        |
   | `{{phone}}`         | Phone number          |
   | `{{from_email}}`    | Their email           |
   | `{{service}}`       | Service required      |
   | `{{budget}}`        | Selected budget range |
   | `{{message}}`       | Their message         |
   | `{{to_email}}`      | Your inbox            |

4. 🔑 Open **Account → General** and copy your **Public Key**
5. ✏️ Paste all three into `src/components/Contact.jsx`:

   ```js
   const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
   ```

6. 🧪 Submit a test enquiry and confirm it reaches your inbox.

---

## 🔍 SEO

- 🏷️ Unique `<title>` and meta description
- 📣 Open Graph and Twitter card tags
- 🔗 Canonical URL
- 🧩 JSON-LD `ProfessionalService` structured data (area served: India)
- 🪜 Proper H1 → H2 → H3 hierarchy and semantic landmarks
- 🤖 `robots.txt` and `sitemap.xml` included
- 📱 Mobile-first layout for strong Core Web Vitals

> 🌐 Replace `www.webdesignanddevelopment.in` with your real domain in `index.html` (canonical, OG tags, JSON-LD) and `public/sitemap.xml`, and in `public/robots.txt`.

---

## 🌍 Deployment

### ▲ Vercel / 🟩 Netlify (recommended)

1. Push the project to GitHub 🐙
2. Import the repository
3. Build command: `npm run build`
4. Output directory: `dist`

### 🐙 GitHub Pages

If the site lives at `https://<user>.github.io/<repo>/`, set the base path first in `vite.config.js`:

```js
export default defineConfig({
  base: "/<repo>/",
  plugins: [react()],
});
```

Then:

```bash
npm run build
# publish the contents of /dist to the gh-pages branch
```

---

## ✅ Before Going Live

- [ ] 🌐 Replace the placeholder domain in `index.html`, `public/sitemap.xml` and `public/robots.txt`
- [ ] 📩 Add your EmailJS Service ID, Template ID and Public Key
- [ ] 🔗 Replace the `"#"` Live Demo and GitHub links in `src/data/projects.js` (set a field to `null` to hide that button)
- [ ] 💬 Replace placeholder testimonials in `src/data/content.js` with genuine reviews, only when you have them
- [ ] 👤 Update the GitHub and LinkedIn links in `src/components/Footer.jsx` to your real profiles
- [ ] 🖼️ Add a 1200×630 social preview image at `public/og-cover.png`
- [ ] 📱 Test the site on a real phone, including the WhatsApp and Call buttons

---

## 🤝 Content Honesty

This site is built to be trustworthy, so:

- 🧪 Portfolio projects are labelled **"Demo Project"** and are not presented as paid client work
- 🚫 Testimonials are clearly marked placeholders, never fabricated reviews
- 🚫 No fake client logos
- 📍 No fake office address; the business is presented as remote and Pan-India

---

<p align="center">Built with ❤️ using React + Vite · Serving businesses across India 🇮🇳</p>
