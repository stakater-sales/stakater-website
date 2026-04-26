# New Case Study

Create a new case study for the Stakater website.

## Ask the user for:
1. **Company name** — e.g. "Elisa", "Volvo", "IKEA"
2. **Industry** — e.g. "Telecommunications", "Automotive", "Retail"
3. **Initials** — 2-3 letters shown as avatar when no logo exists, e.g. "EL"
4. **Outcome** — one punchy sentence: what the customer achieved (include a metric if possible)
5. **Challenge** — one sentence: the problem they came to Stakater with
6. **Solution** — one sentence: what Stakater built/delivered
7. **Metrics** — 2-4 key results, each with a value and label, e.g. `80% Faster to Market`, `60% Reduced TCO`
8. **Services used** — pick from: `KubeDesign`, `KubeDeploy`, `KubeCare`, `KubeAudit`, `KubeStart`, `Platform Engineering`, `AKS Enablement`, `EKS Enablement`, `OpenShift Enablement`, `Rancher Enablement`, `Multi-Tenant Operator`, `Stakater Cloud`, `Cloud Orchestrator`
9. **Featured?** — yes/no

## Then:

Create the file at `src/content/case-studies/<slug>.md` where `<slug>` is the company name lowercased.

Use this frontmatter schema exactly:
```yaml
---
company: ""
industry: ""
initials: ""           # 2-3 chars, shown as avatar
# logo: "/logos/company.svg"   # omit unless file exists in public/logos/
outcome: ""            # one sentence with a metric if possible
challenge: ""          # one sentence
solution: ""           # one sentence
metrics:
  - { value: "", label: "" }
  - { value: "", label: "" }
services: []
publishedAt: YYYY-MM-DD
featured: false
draft: false
---
```

## Content structure:
Use these `##` sections in the body:
- `## Background` — 1-2 paragraphs: who the company is
- `## The Challenge` — expand on what was breaking or limiting them
- `## What We Built` — the solution in detail: architecture, tools, approach
- `## Results` — quantified outcomes; echo the frontmatter metrics with context
- `## What's Next` (optional) — ongoing work or future phases

## Style:
- Write from Stakater's perspective ("we built", "we deployed")
- Lead each section with the most important sentence
- Keep it factual — no marketing fluff
- 400-800 words total
