# SAVOURÉ — Five Culinary Worlds, One Table

A premium, editorial restaurant website concept built with React, TypeScript, Vite, React Router and Framer Motion. It brings five cuisines into one restrained ivory-and-earth brand, then gives each cuisine its own muted palette and food-led experience.

> **Fictional concept:** SAVOURÉ, its contact details, location and menu pricing are sample content. The reservation form validates locally and shows a preview only; it does not transmit or store bookings.

## Features

- Responsive editorial homepage, five cuisine routes and full footer.
- Five individually themed cuisine experiences with a cinematic image-led hero.
- Eight sample menu items per cuisine, in INR, with category filters, text search and a vegetarian-only toggle.
- Reservation form with required-field validation, date guard, accessible error state and local confirmation preview.
- Keyboard-visible focus, semantic labels, reduced-motion CSS, responsive mobile navigation and graceful image alt text.
- AI-generated visual concept imagery stored locally in `public/images`; the site does not depend on remote food-image URLs.

## Architecture decision

This deliverable uses Vite rather than Next.js App Router because it is a self-contained client-side portfolio demonstration: all menu data and images are local, and no server rendering or backend integration is needed to exercise the experience. This keeps the local run command straightforward. If the assessment explicitly requires Next.js App Router, migrate the two route views to `app/` before submitting it as a Next.js-specific assessment.

## Technology

- React 19 + TypeScript (strict checks)
- Vite 7
- React Router 7
- Framer Motion 12
- Lucide React icons
- CSS custom properties for the shared design system and cuisine themes

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build and checks

```bash
npm run build
npm run lint
npm run preview
```

## Routes

- `/` — homepage
- `/cuisine/south-indian`
- `/cuisine/north-indian`
- `/cuisine/japanese`
- `/cuisine/french`
- `/cuisine/italian`

Cuisine routes support direct loading and refresh through Vite's SPA fallback in development and preview mode.

## Project structure

```text
src/
  components/       Shared header, footer, reservation form and dish cards
  data/cuisines.ts  Cuisine themes, menu data, sample prices and asset paths
  pages/            Homepage and reusable cuisine detail page
  main.tsx          Router, transitions and hash/scroll handling
  styles.css        Global styles, responsive layouts, themes and reduced motion
public/images/      Local generated visual assets
```

## Change the design

- **Cuisine colours and copy:** edit the cuisine objects in `src/data/cuisines.ts` (`accent`, `deep`, `paper`, `sand`, `text`, `muted`, `border`, plus copy).
- **Dishes, categories and prices:** edit the `Dish[]` arrays in `src/data/cuisines.ts`. Each dish needs a stable unique `id`, name, description, price, category and local image path.
- **Images:** replace the files in `public/images/` while keeping the same filenames, or update their paths in the cuisine/dish data. Images are local and do not require an image API key.
- **Animation:** shared route and reveal timings are in `src/main.tsx`, `src/pages/HomePage.tsx` and `src/pages/CuisinePage.tsx`; global reduced-motion handling is in `src/styles.css`.
- **Typography and layout:** fonts are linked in `index.html`; the main design tokens and component styling are in `src/styles.css`.
- **Branding:** update `SAVOURÉ` in `SiteHeader.tsx`, `SiteFooter.tsx`, `index.html` and the README as desired.

## Notes and limitations

- The external motion reference supplied in the brief was not independently inspected in this build. The site uses an original image-led cuisine hero transition, subtle route fades, and staggered section reveals rather than claiming an exact recreation.
- Food and interior visuals are AI-generated concept imagery cropped from generated visual studies. They are stored locally to keep the app self-contained.
- Google Fonts are loaded remotely when internet access is available; system fallbacks are provided.
- This is a frontend portfolio demo: no API, booking provider, database, analytics, checkout or email integration is configured.
- A dependency lockfile could not be generated in the build environment because the npm registry could not be reached. Run `npm install` in a network-enabled environment; it will resolve dependencies and generate `package-lock.json`.
