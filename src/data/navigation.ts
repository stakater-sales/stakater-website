export const navigation = {
  products: {
    label: 'Products',
    items: [
      {
        label: 'Stakater Cloud',
        href: '/products/stakater-cloud',
        description: 'Managed OpenShift & Kubernetes built for governance and scale',
        tag: 'Managed Platform',
      },
      {
        label: 'Cloud Orchestrator',
        href: '/products/cloud-orchestrator',
        description: 'Run and automate your own cloud for VMs and Kubernetes. Without VMware.',
        tag: 'SCO',
      },
      {
        label: 'Multi-Tenant Operator',
        href: '/products/mto',
        description: 'Enterprise-grade multi-tenancy across Kubernetes and OpenShift',
        tag: 'MTO',
      },
      {
        label: 'Reloader Enterprise',
        href: '/products/reloader',
        description: 'Auto-reload workloads when ConfigMaps or Secrets change',
        tag: 'Open Source+',
      },
    ],
  },
  services: {
    label: 'Services',
    groups: [
      {
        label: 'Platform Engineering',
        items: [
          { label: 'Platform Engineering', href: '/services/platform-engineering', description: 'Build and scale internal developer platforms' },
          { label: 'KubeDesign', href: '/services/kube-design', description: 'Kubernetes architecture & design' },
          { label: 'KubeDeploy', href: '/services/kube-deploy', description: 'Production-ready Kubernetes deployment' },
          { label: 'KubeCare', href: '/services/kube-care', description: 'Day-2 ops, monitoring & 24/7 support' },
          { label: 'KubeAudit', href: '/services/kube-audit', description: 'Security, reliability & cost audit' },
          { label: 'KubeStart', href: '/services/kube-start', description: 'Get started with Kubernetes fast' },
        ],
      },
      {
        label: 'Platform Enablement',
        items: [
          { label: 'AKS Enablement', href: '/services/aks-enablement', description: 'Azure Kubernetes Service consulting' },
          { label: 'EKS Enablement', href: '/services/eks-enablement', description: 'Amazon EKS consulting' },
          { label: 'Rancher Enablement', href: '/services/rancher-enablement', description: 'Rancher platform consulting' },
          { label: 'OpenShift Enablement', href: '/services/openshift-enablement', description: 'Red Hat OpenShift consulting' },
        ],
      },
    ],
  },
  resources: {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '/blog', description: 'Engineering insights and platform thinking' },
      { label: 'Case Studies', href: '/case-studies', description: 'Real outcomes from real customers' },
      { label: 'Whitepapers', href: '/whitepapers', description: 'In-depth technical guides' },
      { label: 'Documentation', href: 'https://docs.stakater.com', description: 'Product docs and API reference', external: true },
      { label: 'GitHub', href: 'https://github.com/stakater', description: 'Open source projects', external: true },
    ],
  },
  company: {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Events', href: '/events' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  cta: {
    label: 'Contact Us',
    href: '/contact',
  },
};

export const footerLinks = {
  products: {
    label: 'Products',
    links: [
      { label: 'Stakater Cloud', href: '/products/stakater-cloud' },
      { label: 'Cloud Orchestrator', href: '/products/cloud-orchestrator' },
      { label: 'Multi-Tenant Operator', href: '/products/mto' },
      { label: 'Reloader Enterprise', href: '/products/reloader' },
    ],
  },
  services: {
    label: 'Services',
    links: [
      { label: 'Platform Engineering', href: '/services/platform-engineering' },
      { label: 'KubeDesign', href: '/services/kube-design' },
      { label: 'KubeDeploy', href: '/services/kube-deploy' },
      { label: 'KubeCare', href: '/services/kube-care' },
      { label: 'AKS Enablement', href: '/services/aks-enablement' },
      { label: 'OpenShift Enablement', href: '/services/openshift-enablement' },
    ],
  },
  resources: {
    label: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Documentation', href: 'https://docs.stakater.com' },
      { label: 'GitHub', href: 'https://github.com/stakater' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
};
