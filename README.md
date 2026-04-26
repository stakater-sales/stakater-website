# Stakater Website

Built with Astro + Tailwind + Cloudflare Pages. Treat your website like a product, not a design deliverable.

## Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Framework — zero JS by default, fast builds |
| [Tailwind CSS](https://tailwindcss.com) | Styling with design tokens |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting, CDN, edge |
| [Formspree](https://formspree.io) | Form handling |
| [GitHub API](https://api.github.com) | Live star counts fetched at build time |
| [MDX](https://mdxjs.com) | Blog posts and case studies in Markdown |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `PUBLIC_GA_ID` | Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `PUBLIC_FORMSPREE_ID` | Formspree form ID (from formspree.io dashboard) |
| `GITHUB_TOKEN` | Optional — increases GitHub API rate limit from 60 to 5000 req/hr |

## Content Structure

```
src/content/
├── blog/           # Blog posts (.md or .mdx)
├── case-studies/   # Customer case studies (.md)
├── authors/        # Author profiles (.json)
└── products/       # Product pages content (.md)
```

## Claude Code Workflows

Use these slash commands in Claude Code to create content without touching any code:

```bash
/new-blog-post      # Write a new blog post
/new-case-study     # Add a customer case study
/new-landing-page   # Create a campaign or product landing page
/new-author         # Add an author profile
```

Claude Code will ask you the right questions and generate the correct file with proper frontmatter.

## Adding a Blog Post (Manual)

Create a file in `src/content/blog/your-post-slug.md`:

```markdown
---
title: "Your Post Title"
description: "One or two sentence summary for SEO and cards."
publishedAt: 2025-04-01
author: "your-author-slug"
tags: ["kubernetes", "platform-engineering"]
featured: false
draft: false
---

Your post content here in Markdown...
```

Then deploy:

```bash
git add .
git commit -m "blog: your post title"
git push
```

Cloudflare Pages will build and deploy automatically.

## Adding a Case Study

Create `src/content/case-studies/company-name.md`:

```markdown
---
company: "Company Name"
industry: "Industry"
initials: "CN"
outcome: "One sentence describing the outcome."
challenge: "What was their challenge."
solution: "How Stakater solved it."
metrics:
  - { value: "80%", label: "Faster to Market" }
  - { value: "60%", label: "Reduced TCO" }
services: ["Platform Engineering", "KubeDeploy", "MTO"]
publishedAt: 2025-04-01
featured: false
---

Full case study content...
```

## Deployment (Cloudflare Pages)

1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output dir: `dist`
5. Add environment variables in Cloudflare dashboard

Every push to `main` deploys automatically. PRs get preview URLs.

## Navigation

Edit `src/data/navigation.ts` to update nav items, dropdowns, and footer links.

## Design Tokens

All colors, fonts, and spacing are in `tailwind.config.mjs`. The design system uses:

- **Font**: Syne (headings) + Inter (body)
- **Primary color**: `#E8192C` (brand-red)
- **Background**: `#080C14` (near-black navy)
- **Text**: `#F0F4FF` (primary) / `#8B9EC7` (secondary)

## SEO

Every page includes:
- Title + meta description
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card
- Structured data (JSON-LD)
- Canonical URL
- Auto-generated sitemap

To add custom OG image for a page, add `image: "/og/your-image.png"` to the page props or frontmatter.
