import type { APIRoute } from 'astro';
import siteConfig from '../site.config.ts';

export const prerender = true;

const STATIC_PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.4', changefreq: 'monthly' },
  { path: '/contact', priority: '0.3', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms', priority: '0.2', changefreq: 'yearly' },
];

function urlBlock(path: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${siteConfig.domain}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const urlBlocks = [
    ...siteConfig.tools.map((tool) => urlBlock(tool.href, '0.9', 'monthly')),
    ...STATIC_PAGES.map((p) => urlBlock(p.path, p.priority, p.changefreq)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
