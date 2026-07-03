# El Garaje Bikes — Next.js

Alquiler y reparación de bicicletas y patinetes eléctricos en L'Altet, Alicante.
Converted from the original single-file `index.html` to a Next.js (App Router) project.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Edit content (plug-and-play)
All copy lives in JSON — no need to touch component code:
- `data/site.json` — phone, email, address, hours, Instagram, nav links
- `data/content.json` — every section: hero, services, fleet, coast, routes, story, testimonials, contact, modals (prices)

Change a value in the JSON, save, and it updates on the page.

## Structure
- `app/layout.jsx` — SEO metadata, Open Graph, BicycleStore schema, fonts
- `app/page.jsx` — assembles the sections in order
- `app/globals.css` — all styles, ported verbatim from the original (brand tokens preserved)
- `app/sitemap.js`, `app/robots.js` — auto-generated SEO files
- `components/` — one file per section
- `public/img/` — logos (were inline base64, now real files served & optimized)

## Deploy (Vercel)
Push to the `main` branch of `djCorpenterprise/elgarajebikes`. In Vercel, the project
framework preset should be **Next.js** (auto-detected). No build settings needed.

## To do after deploy
- Add `public/favicon.ico` (referenced in metadata)
- Replace the two placeholder footer links (Aviso legal / Privacidad)
- Update `SITE_URL` in `app/layout.jsx` if the domain changes
