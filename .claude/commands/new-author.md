# New Author

Add a new author profile to the Stakater website.

## Ask the user for:
1. **Slug** — used as the filename and referenced in blog `author:` field, e.g. `rasheed-amir`
2. **Name** — full display name
3. **Role** — job title, e.g. "Principal Platform Engineer", "CTO", "DevOps Engineer"
4. **Bio** — 1-2 sentences about them and their expertise
5. **GitHub username** (optional)
6. **LinkedIn** (optional) — just the path after `linkedin.com/in/` or `linkedin.com/company/`
7. **Twitter/X handle** (optional) — without the `@`
8. **Avatar** (optional) — if they provide a filename, it goes in `public/authors/<slug>.jpg`

## Create `src/content/authors/<slug>.json`:
```json
{
  "name": "",
  "role": "",
  "bio": "",
  "github": "",
  "linkedin": "",
  "twitter": "",
  "avatar": "/authors/<slug>.jpg"
}
```

Omit any optional fields that weren't provided — don't include empty strings.

## After creating:
- The author can now be referenced in blog posts as `author: "<slug>"`
- Remind the user to drop a headshot at `public/authors/<slug>.jpg` (recommended: 200×200px, square crop)
