export interface RepoStats {
  stars: number;
  forks: number;
  watchers: number;
  url: string;
  description: string;
}

export const STAKATER_OSS_REPOS = [
  'Reloader',
  'Forecastle',
  'IngressMonitorController',
  'Konfigurator',
  'Xposer',
  'Whitelister',
] as const;

export async function getRepoStats(owner: string, repo: string): Promise<RepoStats> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'stakater-website',
      },
    });
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      url: data.html_url,
      description: data.description,
    };
  } catch (error) {
    console.warn(`Failed to fetch GitHub stats for ${owner}/${repo}:`, error);
    return { stars: 0, forks: 0, watchers: 0, url: `https://github.com/${owner}/${repo}`, description: '' };
  }
}

export function formatCount(count: number): string {
  if (count >= 1000) return `${(Math.floor(count / 100) / 10).toFixed(1)}k`;
  return count.toString();
}

export function formatDockerPulls(count: number): string {
  if (count >= 1_000_000_000) return `${Math.floor(count / 1_000_000_000)}B+`;
  if (count >= 1_000_000) return `${Math.floor(count / 1_000_000)}M+`;
  if (count >= 1_000) return `${Math.floor(count / 1_000)}k+`;
  return `${count}+`;
}

export async function getDockerPullCount(org: string, repo: string): Promise<number> {
  try {
    const response = await fetch(`https://hub.docker.com/v2/repositories/${org}/${repo}/`, {
      headers: { 'User-Agent': 'stakater-website' },
    });
    if (!response.ok) throw new Error(`Docker Hub API error: ${response.status}`);
    const data = await response.json();
    return data.pull_count ?? 0;
  } catch (error) {
    console.warn(`Failed to fetch Docker Hub stats for ${org}/${repo}:`, error);
    return 0;
  }
}

export function formatTotalStars(count: number): string {
  if (count >= 1000) return `${Math.floor(count / 1000)}k+`;
  return `${count}+`;
}

export async function getTotalStakaterStars(): Promise<number> {
  const results = await Promise.allSettled(
    STAKATER_OSS_REPOS.map(repo => getRepoStats('stakater', repo))
  );
  return results.reduce((sum, r) => sum + (r.status === 'fulfilled' ? r.value.stars : 0), 0);
}

export async function getStakaterOpenSourceStats() {
  const [reloader, forecastle, ingressMonitor] = await Promise.all([
    getRepoStats('stakater', 'Reloader'),
    getRepoStats('stakater', 'Forecastle'),
    getRepoStats('stakater', 'IngressMonitorController'),
  ]);
  return { reloader, forecastle, ingressMonitor };
}
