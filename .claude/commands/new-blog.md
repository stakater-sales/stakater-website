# New Blog Post

Create a new blog post for the Stakater website.

## Ask the user for:
1. **Title** — the post title
2. **Topic / brief** — what the post is about (a few sentences is fine)
3. **Author** — check `src/content/authors/` for existing authors; default to `stakater-engineering`
4. **Tags** — suggest from existing posts; common ones: `kubernetes`, `platform-engineering`, `openshift`, `gitops`, `multi-tenancy`, `security`, `observability`
5. **Featured?** — yes/no (featured posts appear prominently on the blog index)

## Then:

Create the file at `src/content/blog/<slug>.md` where `<slug>` is a kebab-case version of the title.

Use this frontmatter schema exactly:
```yaml
---
title: ""
description: ""        # 1-2 sentence SEO description, 120-160 chars
publishedAt: YYYY-MM-DD
author: "stakater-engineering"
tags: []
# image: "/blog/slug.png"   # omit unless an actual image file exists in public/blog/
featured: false
draft: false
---
```

## Content guidelines:
- Open with the problem/context — no fluffy intro
- Use `##` for main sections, `###` for subsections
- Include at least one concrete code example or config snippet if the topic allows
- End with a practical takeaway or next step
- Aim for 800–1500 words
- No "In conclusion" or summary sections — end strong

## After creating the file:
- Confirm the slug and URL: `/blog/<slug>`
- Remind that if an OG hero image is added later it goes in `public/blog/<slug>.png` and the `image:` field must be uncommented
