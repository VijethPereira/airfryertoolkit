import { test, expect } from '@playwright/test';
import siteConfig from '../../src/site.config';
import { presetPath } from '../../src/lib/presets';
import { PRESETS } from '../../src/data/presets';
import { tempLandingSlug } from '../../src/lib/temp-landings';
import { localizedPath } from '../../src/i18n/utils';

// Runs against the built site served by `wrangler dev` (playwright.urls.config.ts), because the
// trailing-slash behaviour lives in Cloudflare's asset handling and public/_redirects, which
// `astro dev` does not apply. Run with `npm run test:urls`.

const PERMANENT = [301, 308];

async function sitemapPaths(request: import('@playwright/test').APIRequestContext): Promise<string[]> {
  const res = await request.get('/sitemap.xml', { maxRedirects: 0 });
  expect(res.status()).toBe(200);
  const locs = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(locs.length).toBeGreaterThan(0);
  for (const loc of locs) expect(loc.startsWith(siteConfig.domain)).toBe(true);
  return locs.map((loc) => loc.slice(siteConfig.domain.length) || '/');
}

test('every sitemap URL answers 200 without a redirect and canonicals to itself', async ({ request }) => {
  const paths = await sitemapPaths(request);
  const failures: string[] = [];
  for (const path of paths) {
    const res = await request.get(path, { maxRedirects: 0 });
    if (res.status() !== 200) {
      failures.push(`${path}: ${res.status()} ${res.headers()['location'] ?? ''}`);
      continue;
    }
    const canonical = (await res.text()).match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== `${siteConfig.domain}${path}`) failures.push(`${path}: canonical ${canonical}`);
  }
  expect(failures).toEqual([]);
});

test('no sitemap URL ends in a slash, except the root', async ({ request }) => {
  const paths = await sitemapPaths(request);
  expect(paths.filter((p) => p !== '/' && p.endsWith('/'))).toEqual([]);
});

const SLASHED_SAMPLES = [
  '/presets',
  presetPath(PRESETS[0].slug),
  localizedPath('de', '/chart'),
  localizedPath('fr', '/'),
  tempLandingSlug(350),
];

for (const path of SLASHED_SAMPLES) {
  test(`${path}/ permanently redirects once to ${path}`, async ({ request, baseURL }) => {
    const res = await request.get(`${path}/`, { maxRedirects: 0 });
    expect(PERMANENT).toContain(res.status());
    const location = new URL(res.headers()['location'], baseURL).pathname;
    expect(location).toBe(path);
    const target = await request.get(location, { maxRedirects: 0 });
    expect(target.status()).toBe(200);
  });
}

test('query strings survive the slash redirect', async ({ request, baseURL }) => {
  const res = await request.get('/frozen/?food=pizza', { maxRedirects: 0 });
  expect(PERMANENT).toContain(res.status());
  const location = new URL(res.headers()['location'], baseURL);
  expect(location.pathname + location.search).toBe('/frozen?food=pizza');
});
