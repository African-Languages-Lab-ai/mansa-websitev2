# Mansa — Marketing Website

Marketing website for **Mansa**, the AI built for African languages, by the African Languages Lab.
A fully responsive multi-page site with scroll reveals, parallax, an interactive language globe, and
a dedicated page for each Mansa product.

**Live site:** https://african-languages-lab-ai.github.io/mansa-websitev2/

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — hand-built design tokens, no component library
- **Framer Motion** — scroll reveals, parallax, tab/accordion transitions, the language globe
- **Open Runde** — the single typeface, self-hosted via `next/font/local` (weights 400/500/600/700).
  Source: https://github.com/lauridskern/open-runde
- Static export (`output: "export"`) for hosting on GitHub Pages

## Pages

| Route         | Page                                                        |
| ------------- | ----------------------------------------------------------- |
| `/`           | Home — hero, products, why Mansa, agent, globe, use cases…  |
| `/agent`      | Mansa Agent                                                 |
| `/ai`         | Mansa AI                                                    |
| `/transcribe` | Mansa Transcribe                                            |
| `/translate`  | Mansa Translate                                             |
| `/pricing`    | Pricing (Free / Plus / Pro / Max / Enterprise)              |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export → ./out
```

The default build has no base path (works at a domain root, e.g. Vercel). For a GitHub Pages
**project** site the base path must match the repo name — set it at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/mansa-websitev2 npm run build
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export with the
correct base path and publishes `./out` to GitHub Pages. Enable Pages once under
**Settings → Pages → Source: GitHub Actions**.

## Design tokens

Defined in `tailwind.config.ts` — `cream`, `espresso`, `maroon`, `sunset`, `ink`, `offwhite`.
Spacing rhythm, page gutter (`.container-page`), card gaps, button padding, and radii follow a
single shared scale reused across every section.

## Project structure

```
app/                 routes, layout, metadata, favicon (icon.png) & OG image
components/
  Navbar, Footer, LogoMarquee, AgentCard
  ui/                Button, Pill, Accordion, StoreButton, UIFrame
  sections/          home-page sections (Hero → FinalCTA)
  agent/ ai/ product/ pricing/   per-page section components
lib/                 fonts, links, languages, motion variants, hooks
public/
  assets/            images, gifs, video
  fonts/             Open Runde (woff2)
```

## Notable behavior

- Navbar transparent → cream/blur on scroll; `solid` on dark-hero pages for legibility.
- Infinite, seamless logo marquee with edge fade + pause-on-hover.
- Parallax backgrounds on the hero, sunset bands, impact, and product heroes — all disabled under
  `prefers-reduced-motion`.
- Interactive **Supported Languages** globe: click a language to float a description card,
  cross-fade between languages, close on ×, outside-click, Escape, or re-click. Keyboard accessible.
- Single-open accordions (Products, FAQ), cross-fading tabs (Use Cases, One-AI-for-every-task,
  Built-for-teams), and hover-zoom on every product-UI panel.
- All primary CTAs link to the Mansa web app; "Contact Us" opens a mailto to the African
  Languages Lab.
