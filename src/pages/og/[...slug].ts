/**
 * Auto-generated OpenGraph images
 * Generates a branded 1200x630 SVG converted to PNG for every page
 * Override per-page by setting `image` in frontmatter or props
 *
 * URL format: /og/[encoded-title].png
 * Usage: pass title and optional subtitle as query params
 * e.g. /og/kubernetes-multi-tenancy.png?title=Kubernetes+Multi-Tenancy&sub=Blog
 */

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Stakater';
  const sub = url.searchParams.get('sub') || 'Platform Engineering';

  // SVG-based OG image — works on Cloudflare Pages without canvas
  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#080C14"/>
      <stop offset="100%" style="stop-color:#0D1220"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" style="stop-color:#E8192C;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#080C14;stop-opacity:0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Grid pattern -->
  <defs>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Red accent line -->
  <rect x="0" y="0" width="4" height="630" fill="#E8192C"/>

  <!-- Logo block -->
  <rect x="64" y="64" width="44" height="44" rx="10" fill="#E8192C"/>
  <text x="86" y="92" text-anchor="middle" font-family="Arial Black, sans-serif" font-weight="900" font-size="22" fill="white">S</text>
  <text x="120" y="95" font-family="Arial Black, sans-serif" font-weight="900" font-size="22" fill="#F0F4FF" letter-spacing="-0.5">STAKATER</text>

  <!-- Sub label -->
  <text x="64" y="230" font-family="monospace" font-size="14" fill="#E8192C" letter-spacing="3" text-transform="uppercase">${sub.toUpperCase()}</text>

  <!-- Title — wrap long titles -->
  ${wrapText(title, 64, 290, 1072, 72)}

  <!-- Bottom bar -->
  <rect x="0" y="590" width="1200" height="1" fill="rgba(255,255,255,0.06)"/>
  <text x="64" y="616" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.3)">stakater.com</text>
  <text x="1136" y="616" text-anchor="end" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.3)">Platform Engineering · Kubernetes · OpenShift</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

function wrapText(text: string, x: number, y: number, maxWidth: number, fontSize: number): string {
  const charsPerLine = Math.floor(maxWidth / (fontSize * 0.55));
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if ((current + ' ' + word).trim().length > charsPerLine && current) {
      lines.push(current.trim());
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) lines.push(current.trim());

  return lines.slice(0, 3).map((line, i) =>
    `<text x="${x}" y="${y + i * (fontSize + 12)}" font-family="Arial Black, sans-serif" font-weight="900" font-size="${fontSize}" fill="#F0F4FF">${line}</text>`
  ).join('\n');
}
