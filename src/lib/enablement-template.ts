/**
 * Shared template data for Platform Enablement pages
 * AKS, EKS, Rancher, OpenShift all follow the same pattern
 */
export function getEnablementFeatures(platform: string) {
  return [
    { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', title: `${platform} Cluster Setup`, description: `Production-ready ${platform} cluster provisioned with enterprise networking, security, and HA configuration.` },
    { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'GitOps Integration', description: `ArgoCD or Flux configured for ${platform}. Repo structure, environments, and promotion pipeline included.` },
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Security Hardening', description: `CIS benchmark hardening for ${platform}. RBAC, network policies, pod security, and image scanning configured.` },
    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Observability Stack', description: `Prometheus, Grafana, and Loki deployed and integrated with ${platform}'s native monitoring capabilities.` },
    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Team Enablement', description: `Hands-on training so your team can operate ${platform} confidently without us in the room.` },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', title: 'Runbooks & Documentation', description: `Platform-specific runbooks for day-2 operations on ${platform}. Upgrade paths, scaling, and incident response.` },
  ];
}

export const enablementProcess = [
  { step: '01', title: 'Assessment', description: 'Review existing infra, workloads, and team experience.' },
  { step: '02', title: 'Design', description: 'Architecture decisions for your specific platform and use case.' },
  { step: '03', title: 'Build', description: 'Provision, configure, and harden the platform.' },
  { step: '04', title: 'Enable', description: 'Training, runbooks, and knowledge transfer.' },
];

export function getEnablementDeliverables(platform: string) {
  return [
    { title: `Production ${platform} cluster`, description: 'Hardened, HA, and ready for workloads.' },
    { title: 'GitOps pipeline', description: 'End-to-end GitOps from repo to production.' },
    { title: 'Observability stack', description: 'Metrics, logs, and alerting pre-configured.' },
    { title: 'Platform runbook pack', description: `${platform}-specific operations documentation.` },
  ];
}
