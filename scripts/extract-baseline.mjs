/**
 * Extract visible text and JSON-LD from all built HTML pages
 * to create the Stage 0 baseline fixtures.
 */

import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = './dist/client';
const OUT_DIR = './tests/fixtures/redesign-baseline';

// English locales to process
const LOCALES = ['en', 'es', 'pt', 'fr', 'de'];

async function extractText(html) {
  let text = html;
  // Remove JSON-LD scripts
  text = text.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  // Remove other scripts
  text = text.replace(/<script[\s\S]*?><\/script>/g, '');
  // Remove style elements
  text = text.replace(/<style[\s\S]*?><\/style>/g, '');
  // Remove noscript
  text = text.replace(/<noscript[\s\S]*?><\/noscript>/g, '');
  // Remove HTML tags, keeping content
  text = text.replace(/<[^>]+>/g, ' ');
  // Collapse multiple spaces
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

async function extractJsonLd(html) {
  const jsonLd = [];
  const matches = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g);

  if (matches) {
    for (const match of matches) {
      const content = match.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>$/, '').trim();
      try {
        const parsed = JSON.parse(content);
        jsonLd.push(parsed);
      } catch (e) {
        // Skip malformed JSON-LD
      }
    }
  }

  return jsonLd;
}

async function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/);
  return match ? match[1].trim() : '';
}

async function findHtmlFiles(dir) {
  const files = [];
  const entries = await import('node:fs').then(fs => fs.promises.readdir(dir, { withFileTypes: true }));

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function processLocale(locale) {
  const files = await findHtmlFiles(DIST_DIR);
  const localeFiles = files.filter(f => {
    const relative = path.relative(DIST_DIR, f);
    const parts = relative.split('/');
    let fileLocale = 'en';

    if (parts.length > 1) {
      fileLocale = parts[1].split('/')[0] || 'en';
      if (fileLocale === 'en' || fileLocale === '') fileLocale = 'en';
      if (fileLocale === 'es') fileLocale = 'es';
      if (fileLocale === 'pt') fileLocale = 'pt';
      if (fileLocale === 'fr') fileLocale = 'fr';
      if (fileLocale === 'de') fileLocale = 'de';
    }

    return fileLocale === locale;
  });

  const results = [];

  for (const filePath of localeFiles) {
    const html = await readFile(filePath, 'utf-8');
    const title = await extractTitle(html);
    const visibleText = await extractText(html);
    const jsonLd = await extractJsonLd(html);
    const url = new URL(`file://${filePath}`).href;

    // Extract slug from path
    const relative = path.relative(DIST_DIR, filePath);
    const parts = relative.split('/');
    let slug = parts[parts.length - 1].replace('.html', '');

    // Remove locale prefix from slug if present
    if (slug.startsWith(locale)) {
      slug = slug.substring(locale.length + 1);
    }

    // Remove leading slash
    slug = slug.replace(/^\/+/, '');

    // For index.html or root, slug becomes '/'
    if (slug === '' || slug === 'index') slug = '/';

    results.push({
      slug,
      title,
      visibleText,
      jsonLd,
      url: `https://airfryertoolkit.com${locale}${slug || ''}`
    });
  }

  return results;
}

async function main() {
  console.log('Extracting baseline data from all built pages...\n');

  // Process all locales
  const allResults = {};

  for (const locale of LOCALES) {
    console.log(`Processing ${locale} locale...`);
    const localeResults = await processLocale(locale);
    console.log(`  Found ${localeResults.length} ${locale} pages`);
    allResults[locale] = localeResults;
  }

  // Merge: for each slug, keep English visibleText and JSON-LD as baseline
  const merged = new Map();

  // First, add all English pages
  const englishPages = allResults['en'];
  for (const r of englishPages) {
    merged.set(r.slug, {
      slug: r.slug,
      title: r.title,
      visibleText: r.visibleText,
      jsonLd: r.jsonLd,
      url: r.url
    });
  }

  // For other locales, replace visibleText and jsonLd with English baseline
  for (const locale of ['es', 'pt', 'fr', 'de']) {
    const localePages = allResults[locale];

    for (const r of localePages) {
      const english = merged.get(r.slug);
      if (english) {
        // Use English text as baseline for all locales
        r.visibleText = english.visibleText;
        r.jsonLd = english.jsonLd;
        r.title = english.title;
        merged.set(r.slug, r);
      }
    }
  }

  // Write baseline fixtures
  console.log(`\nWriting ${merged.size} baseline fixtures to ${OUT_DIR}...\n`);

  await import('node:fs').then(fs => fs.promises.mkdir(OUT_DIR, { recursive: true }));

  let written = 0;

  for (const [slug, data] of merged) {
    const safeSlug = slug.replace(/[^\w.-]/g, '_') || 'index';
    const outPath = path.join(OUT_DIR, `${safeSlug}.json`);

    await writeFile(outPath, JSON.stringify(data, null, 2));
    written++;

    if (written % 50 === 0 || written === merged.size) {
      console.log(`  Written: ${written}/${merged.size}`);
    }
  }

  console.log(`\nBaseline complete: ${written} pages extracted`);
  console.log(`Output directory: ${OUT_DIR}`);
  console.log(`Sample baseline entries:`);

  // Show a few samples
  let count = 0;
  for (const [slug, data] of merged) {
    if (count >= 5) break;
    console.log(`  - ${slug}: title="${data.title.substring(0, 40)}..."`);
    count++;
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});