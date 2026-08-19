import type { APIRoute } from 'astro';
import siteConfig from '../site.config.ts';
import { LOCALES, DEFAULT_LOCALE } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';

export const prerender = true;

const STATIC_PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: '/about', priority: '0.4', changefreq: 'monthly' },
  { path: '/contact', priority: '0.3', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms', priority: '0.2', changefreq: 'yearly' },
];

/** Pages with real translated content at /es, /pt, /fr, /de as well as the English root. */
const TRANSLATED_PAGES: { slug: string; priority: string; changefreq: string }[] = [
  { slug: '/', priority: '1.0', changefreq: 'weekly' },
  { slug: '/oven-to-air-fryer', priority: '0.9', changefreq: 'monthly' },
];

function urlBlock(path: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${siteConfig.domain}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function translatedUrlBlock(slug: string, priority: string, changefreq: string): string {
  const alternates = [
    ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${localizedUrl(l.code, slug)}" />`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, slug)}" />`,
  ].join('\n');

  return LOCALES.map(
    (l) => `  <url>
    <loc>${localizedUrl(l.code, slug)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
  </url>`,
  ).join('\n');
}

export const GET: APIRoute = () => {
  const urlBlocks = [
    ...TRANSLATED_PAGES.map((p) => translatedUrlBlock(p.slug, p.priority, p.changefreq)),
    ...STATIC_PAGES.map((p) => urlBlock(p.path, p.priority, p.changefreq)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
