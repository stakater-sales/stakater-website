# Architecture

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 4.16 | Static-first, zero JS by default, great for content sites |
| Output mode | `hybrid` | Most pages prerendered; OG image endpoint is server-side |
| Adapter | `@astrojs/cloudflare` | Deployed on Cloudflare Pages with edge functions |
| Styling | Tailwind CSS 3 + `@tailwindcss/typography` | Utility-first; typography plugin for blog prose |
| Content | Astro Content Collections | Type-safe frontmatter via Zod schemas |
| Deployment | Cloudflare Pages | `wrangler.toml` configures the project |

## Output Mode: Hybrid

The site is `output: "hybrid"` — all pages are prerendered (static HTML) at build time except:

- `src/pages/og/[...slug].ts` — `export const prerender = false` makes this a Cloudflare edge function that generates OpenGraph SVG images on demand.

Every other route has `export const prerender = true` (the default in hybrid mode).

## Directory Structure

```
src/
├── components/
│   ├── layout/        Header, Footer
│   ├── sections/      Page-level sections (Hero, Stats, OpenSource, etc.)
│   └── ui/            Reusable primitives (Button, Card, SEO, AuthorCard, etc.)
├── content/
│   ├── blog/          Markdown blog posts
│   ├── case-studies/  Markdown case study pages
│   ├── authors/       JSON author profiles
│   └── config.ts      Zod schemas for all collections
├── data/
│   └── navigation.ts  Nav + footer link definitions (single source of truth)
├── layouts/
│   ├── BaseLayout.astro      HTML shell + SEO head + GA
│   ├── BlogLayout.astro      Blog post wrapper
│   ├── ProductLayout.astro   Product page wrapper
│   ├── ServiceLayout.astro   Service page wrapper
│   └── CampaignLayout.astro  Landing page wrapper
├── lib/
│   ├── github.ts      GitHub API fetching, star counts, formatters
│   ├── seo.ts         siteConfig, buildTitle, buildCanonical
│   ├── utils.ts       formatDate, readingTime
│   └── enablement-template.ts  Shared data for all enablement service pages
├── pages/
│   ├── index.astro
│   ├── blog/[slug].astro
│   ├── blog/tag/[tag].astro
│   ├── case-studies/[slug].astro
│   ├── products/      4 product pages
│   ├── services/      10 service pages (6 Kube* + 4 enablement)
│   └── og/[...slug].ts  Server-side OG image generator
└── styles/
    └── global.css     Tailwind directives + custom component classes
```

## Content Collections

| Collection | Type | Key Fields |
|---|---|---|
| `blog` | Markdown | title, description, publishedAt, author (→ authors), tags, image?, featured, draft |
| `case-studies` | Markdown | company, industry, outcome, challenge, metrics[], services[] |
| `authors` | JSON data | name, role, bio, avatar?, linkedin?, github?, twitter? |
| `products` | Markdown | title, tagline, features[], cta |

## OG Image Generation

Route: `GET /og/[any-slug].png?title=...&sub=...`

- Server-side Cloudflare edge function (`prerender = false`)
- Returns `image/svg+xml` — a branded 1200×630 SVG
- No canvas, no sharp, no fonts required — pure SVG with system fonts
- `BlogLayout` auto-generates the URL for posts without a `image` frontmatter field; only used in `<meta property="og:image">`, not as a visible page element

## GitHub Stars (Build-Time)

`src/lib/github.ts` fetches star counts at build time from the GitHub API (unauthenticated, 60 req/hr limit). Tracked repos:

- Reloader (~10k★)
- Forecastle (~800★)
- IngressMonitorController (~730★)
- Konfigurator, Xposer, Whitelister (smaller)

`getTotalStakaterStars()` sums all repos. Used in `Stats.astro` and `about.astro`. Each has a hardcoded fallback for when the API is unavailable.

`formatCount(n)` — floors to one decimal: 9991 → `9.9k`
`formatTotalStars(n)` — floors to nearest k: 11644 → `11k+`

## SEO

`SEO.astro` handles all meta tags: Open Graph, Twitter Card, JSON-LD structured data. Called from `BaseLayout` with props passed down from every page and layout.

Canonical URLs and OG image URLs are built via `src/lib/seo.ts`:
- `buildTitle(title)` → `"Page Title | Stakater"`
- `buildCanonical(path)` → `"https://stakater.com/path"`

## CSS

`global.css` order matters:
1. `@import` for Google Fonts — **must be first** (CSS spec)
2. `@tailwind base/components/utilities`
3. `@layer base` — html/body defaults, scrollbar
4. `@layer components` — `.container-site`, `.btn-*`, `.card`, `.tag`, `.prose-stakater`, `.animate-on-scroll`

`animate-on-scroll` starts at `opacity: 0` and is made visible by the IntersectionObserver script in `BaseLayout`. If JS is disabled, content is invisible — this is a known tradeoff.

## Known Dependency Pins

`@astrojs/sitemap` is pinned to exactly `3.1.6` (no `^`) because `3.7.2+` targets Astro 6 and uses the `astro:routes:resolved` hook which does not exist in Astro 4.x, causing builds to fail.
