# New Service Page

Add a new service page to the Stakater website.

## Two types of service pages:

**Type A — Kube* services** (KubeDesign, KubeDeploy, KubeCare, KubeAudit, KubeStart, Platform Engineering)
These use `ServiceLayout.astro` directly with custom features/process/deliverables per page.

**Type B — Platform Enablement** (AKS, EKS, Rancher, OpenShift)
These use `ServiceLayout.astro` + shared data from `src/lib/enablement-template.ts` (same 6 features, same 4-step process, same 4 deliverables — just the platform name swapped in).

## Ask the user for:
1. **Service name** — e.g. "GKE Enablement", "FinOps Advisory"
2. **Type** — Kube-style (custom) or Enablement-style (templated)
3. **URL slug** — e.g. `gke-enablement`, `finops-advisory`
4. **Headline** — the hero headline
5. **Subtext** — 1-2 sentence hero description
6. **Features** — 4-6 features (title + description each); for enablement type these come from the template
7. **Deliverables** — what the customer gets at the end
8. **Target customer** — who this is for (used in the hero badge/label)

## Create `src/pages/services/<slug>.astro`:

For enablement-type pages, follow the exact pattern of `src/pages/services/aks-enablement.astro`.
For Kube-type pages, follow the pattern of `src/pages/services/kube-design.astro`.

## After creating the page:
- Add it to `src/data/navigation.ts` under the correct group (Platform Engineering or Platform Enablement)
- Run `npm run build` to confirm no errors
