import { test, expect, type APIRequestContext } from '@playwright/test';
import siteConfig from '../../src/site.config';
import { LOCALES } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';

// Runs against the built site under wrangler dev (playwright.urls.config.ts): npm run test:urls.
// A crawler that follows only <a href> (no forms, no <option>, no JS) must reach every sitemap
// URL within MAX_CLICKS of the locale's homepage.

const MAX_CLICKS = 3;

async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const xml = await (await request.get('/sitemap.xml')).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(siteConfig.domain.length) || '/');
}

/** Internal page paths linked by plain <a href> (query and fragment dropped: they land on the same page). */
function links(html: string, from: string): string[] {
  const out = new Set<string>();
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const url = new URL(href.replace(/&amp;/g, '&'), `${siteConfig.domain}${from}`);
    if (url.origin !== siteConfig.domain) continue;
    if (/\.[a-z0-9]+$/i.test(url.pathname)) continue; // files (xml, txt, png)
    out.add(url.pathname);
  }
  return [...out];
}

const pageCache = new Map<string, string>();
async function html(request: APIRequestContext, path: string): Promise<string | null> {
  if (!pageCache.has(path)) {
    const res = await request.get(path, { maxRedirects: 0 });
    pageCache.set(path, res.status() === 200 && (res.headers()['content-type'] ?? '').includes('text/html') ? await res.text() : '');
  }
  return pageCache.get(path) || null;
}

/** Click depth of every page reachable from `start`, breadth first. */
async function crawl(request: APIRequestContext, start: string): Promise<Map<string, number>> {
  const depth = new Map<string, number>([[start, 0]]);
  let frontier = [start];
  for (let d = 1; frontier.length > 0; d++) {
    const next: string[] = [];
    for (const path of frontier) {
      const body = await html(request, path);
      if (!body) continue;
      for (const link of links(body, path)) {
        if (depth.has(link)) continue;
        depth.set(link, d);
        next.push(link);
      }
    }
    frontier = next;
  }
  return depth;
}

for (const { code } of LOCALES) {
  test(`every ${code} sitemap URL is within ${MAX_CLICKS} clicks of ${localizedPath(code, '/')} by <a href> alone`, async ({ request }) => {
    test.setTimeout(180_000);
    const root = localizedPath(code, '/');
    const prefix = code === 'en' ? null : `/${code}`;
    const ours = (await sitemapPaths(request)).filter((p) =>
      prefix ? p === prefix || p.startsWith(`${prefix}/`) : !LOCALES.some((l) => l.code !== 'en' && (p === `/${l.code}` || p.startsWith(`/${l.code}/`))),
    );
    const depth = await crawl(request, root);
    const report = ours.map((p) => ({ path: p, depth: depth.get(p) ?? Infinity }));
    const deep = report.filter((r) => r.depth > MAX_CLICKS);
    const max = Math.max(...report.map((r) => r.depth));
    console.log(`${code}: ${ours.length} sitemap URLs, deepest ${max} click(s)${deep.length ? `; deeper than ${MAX_CLICKS}: ${deep.map((r) => `${r.path} (${r.depth})`).join(', ')}` : ''}`);
    expect(deep).toEqual([]);
  });
}

test('FAQ answers are in the server-rendered HTML, word for word as in the FAQPage JSON-LD', async ({ request }) => {
  test.setTimeout(180_000);
  const text = (s: string) =>
    s
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  const failures: string[] = [];
  let pairs = 0;
  for (const path of await sitemapPaths(request)) {
    const body = await html(request, path);
    if (!body) continue;
    const visible = text(body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' '));
    for (const [, json] of body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const blocks = [JSON.parse(json)].flat().flatMap((b) => b['@graph'] ?? [b]);
      for (const faq of blocks.filter((b) => b['@type'] === 'FAQPage')) {
        for (const q of faq.mainEntity) {
          pairs++;
          if (!visible.includes(text(q.name))) failures.push(`${path}: question "${q.name}"`);
          if (!visible.includes(text(q.acceptedAnswer.text))) failures.push(`${path}: answer to "${q.name}"`);
        }
      }
    }
  }
  expect(pairs).toBeGreaterThan(1000);
  expect(failures).toEqual([]);
});

test('every translated page below the homepage carries a BreadcrumbList with absolute apex URLs', async ({ request }) => {
  test.setTimeout(180_000);
  const failures: string[] = [];
  for (const path of await sitemapPaths(request)) {
    if (path === '/' || LOCALES.some((l) => path === `/${l.code}`) || ['/about', '/contact', '/privacy-policy', '/terms'].includes(path)) continue;
    const body = await html(request, path);
    const lists = [...(body ?? '').matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(([, json]) => [JSON.parse(json)].flat())
      .filter((b) => b['@type'] === 'BreadcrumbList');
    if (lists.length !== 1) {
      failures.push(`${path}: ${lists.length} BreadcrumbList blocks`);
      continue;
    }
    const items: { position: number; name: string; item: string }[] = lists[0].itemListElement;
    if (items.length < 2 || items.length > 3) failures.push(`${path}: ${items.length} crumbs`);
    if (items.at(-1)?.item !== `${siteConfig.domain}${path}`) failures.push(`${path}: last crumb ${items.at(-1)?.item}`);
    items.forEach((it, i) => {
      if (it.position !== i + 1 || !it.name || !it.item.startsWith(`${siteConfig.domain}/`)) failures.push(`${path}: crumb ${i + 1}`);
    });
  }
  expect(failures).toEqual([]);
});
