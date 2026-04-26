# New Whitepaper

Add a new whitepaper to the Stakater website.

## Context
Whitepapers live in `src/content/whitepapers/` (content collection) and are listed on `/whitepapers`.

If the `whitepapers` collection doesn't exist yet, you need to:
1. Add the collection schema to `src/content/config.ts`
2. Update `src/pages/whitepapers.astro` to render from the collection instead of the "coming soon" placeholder

## Collection schema to add to config.ts (if missing):
```ts
const whitepaperCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    topics: z.array(z.string()).default([]),
    downloadUrl: z.string().optional(),  // external PDF link or /downloads/slug.pdf
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
// add 'whitepapers': whitepaperCollection to collections export
```

## Ask the user for:
1. **Title** — the whitepaper title
2. **Description** — 2-3 sentence summary (used on the listing card and SEO)
3. **Topics** — e.g. `kubernetes`, `multi-tenancy`, `vmware-migration`, `platform-engineering`, `security`, `gitops`
4. **Download URL** — link to the PDF (external) or path if hosted in `public/downloads/`
5. **Featured?** — yes/no

## Create the file at `src/content/whitepapers/<slug>.md`:
```yaml
---
title: ""
description: ""
publishedAt: YYYY-MM-DD
topics: []
# downloadUrl: ""
# coverImage: "/whitepapers/slug.png"
featured: false
draft: false
---
```

## Body content:
- `## Overview` — what this whitepaper covers and who it's for
- `## What's Inside` — bullet list of the key sections/topics
- `## Who Should Read This` — the target audience (CTO, Platform Lead, SRE, etc.)

Keep the body brief — the full content is in the PDF. This is the preview/landing copy.
