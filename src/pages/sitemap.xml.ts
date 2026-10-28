import type { APIRoute } from 'astro';
import siteConfig, { TRANSLATED_PAGES } from '../site.config.ts';
import { LOCALES, DEFAULT_LOCALE, type LocaleCode } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';
import { BRAND_PATHS, MODEL_MAX_TEMP_PATH } from '../lib/brands';
// Last commit that changed each page's data or dictionary entry; written by scripts/content-dates.mjs before the build.
import CONTENT_DATES from '../data/content-dates.json';

export const prerender = true;

// No <priority> or <changefreq>: Google ignores both. <lastmod> is a real content date, not build time.
// English-only pages: one <url> each, no hreflang alternates.
const STATIC_PAGES = [...BRAND_PATHS, MODEL_MAX_TEMP_PATH, '/about', '/contact', '/privacy-policy', '/terms'];

function lastmod(locale: LocaleCode, slug: string): string {
  const date = (CONTENT_DATES as Record<string, string>)[`${locale}:${slug}`];
  if (!date) throw new Error(`sitemap: no content date for ${locale}:${slug} — run node scripts/content-dates.mjs`);
  return date;
}

function urlBlock(path: string): string {
  return `  <url>
    <loc>${siteConfig.domain}${path}</loc>
    <lastmod>${lastmod(DEFAULT_LOCALE, path)}</lastmod>
  </url>`;
}

function translatedUrlBlock(slug: string): string {
  const alternates = [
    ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${localizedUrl(l.code, slug)}" />`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, slug)}" />`,
  ].join('\n');

  return LOCALES.map(
    (l) => `  <url>
    <loc>${localizedUrl(l.code, slug)}</loc>
    <lastmod>${lastmod(l.code, slug)}</lastmod>
${alternates}
  </url>`,
  ).join('\n');
}

export const GET: APIRoute = () => {
  const urlBlocks = [...TRANSLATED_PAGES.map((p) => translatedUrlBlock(p.slug)), ...STATIC_PAGES.map((p) => urlBlock(p))];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
