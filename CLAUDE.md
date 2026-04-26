# Stakater Website — Claude Context

## What this is

Marketing website for Stakater (stakater.com) — a platform engineering company based in Stockholm. Built with Astro 4, Tailwind CSS, deployed on Cloudflare Pages.

## Key facts

- **Output mode**: `hybrid` (not `static`) — required because `src/pages/og/[...slug].ts` is a server-side OG image generator
- **Adapter**: `@astrojs/cloudflare` — must stay even though it warns about Sharp incompatibility
- **Sitemap**: pinned to `3.1.6` exactly — `3.7.2+` breaks Astro 4 builds (uses Astro 6 hook)
- **CSS import order**: `@import` for Google Fonts must come before `@tailwind` directives in `global.css`

## Adding content

**New blog post** → `src/content/blog/your-slug.md`
```yaml
---
title: "Post Title"
description: "..."
publishedAt: 2025-01-01
author: "stakater-engineering"
tags: ["kubernetes"]
# image: "/blog/your-image.png"   optional — omit to auto-generate OG image
featured: false
draft: false
---
```
No `image` field = OG image auto-generated via `/og/` endpoint. Do not use the OG URL as a visible `<img>` in the page — only in meta tags.

**New case study** → `src/content/case-studies/company.md`

**New author** → `src/content/authors/slug.json`

## Adding pages

- Product pages use `ProductLayout.astro`
- Service pages use `ServiceLayout.astro` — the 4 enablement pages (AKS, EKS, Rancher, OpenShift) share data from `src/lib/enablement-template.ts`
- Add new nav items to `src/data/navigation.ts` (single source of truth for header + footer)

## GitHub stars

`src/lib/github.ts` fetches at build time. To add a repo to the total, add it to `STAKATER_OSS_REPOS`. Always include a fallback string in callers for when the API is unavailable (unauthenticated = 60 req/hr).

## Design tokens

All colours, fonts, shadows are in `tailwind.config.mjs`. Key tokens:
- `background.DEFAULT` `#080C14` — page background
- `brand.red` `#E8192C` — primary accent
- `text.primary` `#F0F4FF`, `text.secondary` `#8B9EC7`
- Fonts: `font-display` (Syne), `font-body` (Inter), `font-mono` (JetBrains Mono)

## Docs

- `docs/architecture.md` — full technical architecture reference

## What to avoid

- Don't bump `@astrojs/sitemap` past `3.1.6` without also upgrading Astro to 5+
- Don't switch `output` back to `static` — the OG image route requires server rendering
- Don't move the Google Fonts `@import` below the `@tailwind` directives
- Don't use OG image URLs as visible `<img>` src — they return SVG, not a photo
