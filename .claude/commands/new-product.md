# New Product Page

Add a new product page to the Stakater website.

## Ask the user for:
1. **Product name** — e.g. "Stakater Vault Operator"
2. **URL slug** — e.g. `vault-operator`
3. **Tag** — short label shown in the badge, e.g. `Open Source`, `Managed`, `Enterprise`
4. **Headline** — hero headline
5. **Subtext** — 1-2 sentence hero description
6. **Features** — 4-6 features (title + description); icon is optional (Heroicons path string)
7. **Metrics** — 2-4 key stats (value + label + optional sub-label)
8. **Use cases** — 2-4 use cases (title + description)
9. **Primary CTA** — button label + href (default: "Contact Us" → `/contact`)
10. **GitHub repo** (optional) — if open source

## If the product has a GitHub repo:
Import and use `getRepoStats` from `src/lib/github.ts` to show live star/fork counts in metrics.

## Create `src/pages/products/<slug>.astro`:

Follow the pattern of an existing product page. Use `ProductLayout` for standard products.
For rich landing pages (like Reloader Enterprise), build a custom page using `BaseLayout` directly.

## After creating:
- Add to `src/data/navigation.ts` under products
- Add to `src/components/sections/FeaturedProducts.astro` if it should appear on the homepage
- Run `npm run build` to confirm no errors
