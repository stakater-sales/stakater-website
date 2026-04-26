export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: Date;
  updatedAt?: Date;
  author?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
}

export const siteConfig = {
  name: 'Stakater',
  tagline: 'Platform Engineering | Kubernetes | OpenShift',
  url: 'https://stakater.com',
  description: 'Stakater helps enterprises accelerate their cloud-native journey with Kubernetes services, managed platforms, and platform engineering expertise.',
  twitterHandle: '@stakater',
  locale: 'en',
};

export function buildTitle(title: string, includesSite = true): string {
  if (!includesSite) return title;
  return `${title} | ${siteConfig.name}`;
}

export function buildCanonical(path: string): string {
  return `${siteConfig.url}${path}`;
}
