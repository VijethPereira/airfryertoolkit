// Fails the build when dist/client/sitemap.xml is not a real sitemap.
// Why: if the sitemap route throws while prerendering (e.g. a page with no content date),
// Astro can write the error text into sitemap.xml and the build still "succeeds".
import { existsSync, readFileSync } from 'node:fs';

const FILE = 'dist/client/sitemap.xml';
const SITE = 'https://airfryertoolkit.com';
const problems = [];

if (!existsSync(FILE)) {
  console.error(`check-sitemap: ${FILE} was not built`);
  process.exit(1);
}
const xml = readFileSync(FILE, 'utf8');

if (!xml.startsWith('<?xml')) problems.push(`does not start with <?xml — got: ${JSON.stringify(xml.slice(0, 120))}`);
if (!xml.trimEnd().endsWith('</urlset>')) problems.push('does not end with </urlset>');

const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
if (urls.length === 0) problems.push('has no <url> entries');

const seen = new Set();
for (const block of urls) {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!loc) {
    problems.push('a <url> has no <loc>');
    continue;
  }
  if (seen.has(loc)) problems.push(`duplicate <loc> ${loc}`);
  seen.add(loc);
  if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(block)) problems.push(`${loc}: missing or malformed <lastmod>`);
  if (!loc.startsWith(SITE)) {
    problems.push(`${loc}: not on ${SITE}`);
    continue;
  }
  // Every listed page must exist: a prerendered file (build.format 'file': /x -> x.html, / -> index.html),
  // or, for server-rendered pages such as /preheat, a route file of the same name.
  const path = loc.slice(SITE.length) || '/';
  const built =
    existsSync(path === '/' ? 'dist/client/index.html' : `dist/client${path}.html`) ||
    existsSync(`dist/client${path}/index.html`);
  const serverRoute = existsSync(`src/pages${path}.astro`) || existsSync(`src/pages${path}/index.astro`);
  if (!built && !serverRoute) problems.push(`${loc}: no built page or route for ${path}`);
}

if (problems.length) {
  console.error(`check-sitemap: ${FILE} is broken:\n  - ${problems.slice(0, 30).join('\n  - ')}`);
  process.exit(1);
}
console.log(`check-sitemap: ${urls.length} URLs, all with lastmod and a built page`);
