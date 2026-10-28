// Writes src/data/content-dates.json: for every sitemap URL, the date of the last commit that
// changed that page's own data entry or dictionary entry (git blame over the entry's lines, so a
// German top-up dates only the German page). Read by src/pages/sitemap.xml.ts for <lastmod>.
//
// Runs before `astro build`. Without full git history (no .git, or a shallow clone) it leaves the
// committed JSON as it is, so a build never falls back to build time.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const OUT = 'src/data/content-dates.json';
const LOCALES = ['en', 'es', 'pt', 'fr', 'de'];
const TODAY = new Date().toISOString().slice(0, 10);
const UNCOMMITTED = '0'.repeat(40);

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
}

function historyAvailable() {
  try {
    return git(['rev-parse', '--is-shallow-repository']).trim() === 'false';
  } catch {
    return false;
  }
}

/** Per-line commit date (YYYY-MM-DD, UTC) of a file; uncommitted lines date to today. */
const blameCache = new Map();
function lineDates(file) {
  if (blameCache.has(file)) return blameCache.get(file);
  const commitDate = new Map();
  const dates = [];
  let sha = null;
  let porcelain;
  try {
    porcelain = git(['blame', '--line-porcelain', '--', file]);
  } catch {
    // Not committed yet (a new file): every line dates to today.
    const today = fileLines(file).map(() => TODAY);
    blameCache.set(file, today);
    return today;
  }
  for (const line of porcelain.split('\n')) {
    const header = line.match(/^([0-9a-f]{40}) \d+ \d+/);
    if (header) {
      sha = header[1];
      continue;
    }
    const time = line.match(/^committer-time (\d+)/);
    if (time && !commitDate.has(sha)) commitDate.set(sha, new Date(Number(time[1]) * 1000).toISOString().slice(0, 10));
    if (line.startsWith('\t')) dates.push(sha === UNCOMMITTED ? TODAY : commitDate.get(sha));
  }
  blameCache.set(file, dates);
  return dates;
}

const fileLines = (file) => readFileSync(file, 'utf8').split('\n');

/**
 * Line range [start, end] of the object entry `key: {` / `'key': {` / `key: [` at this indent,
 * ending at the matching closing line at the same indent. Throws if the key is missing, so a
 * renamed entry fails the build instead of silently losing its date.
 */
function entryRange(file, key, indent) {
  const lines = fileLines(file);
  const pad = ' '.repeat(indent);
  const open = new RegExp(`^${pad}'?${key.replace(/[-]/g, '\\-')}'?: [{[]`);
  const start = lines.findIndex((l) => open.test(l));
  if (start < 0) throw new Error(`content-dates: no entry "${key}" in ${file}`);
  const close = new RegExp(`^${pad}[}\\]],?$`);
  const end = lines.findIndex((l, i) => i > start && close.test(l));
  return [start, end < 0 ? start : end];
}

/** The PRESETS / TEMP_LANDINGS element whose first lines contain `match`. */
function arrayElementRange(file, match) {
  const lines = fileLines(file);
  const at = lines.findIndex((l) => l.includes(match));
  if (at < 0) throw new Error(`content-dates: "${match}" not in ${file}`);
  if (/\}/.test(lines[at])) return [at, at]; // one-line element
  let start = at;
  while (start > 0 && !/^ {2}\{$/.test(lines[start])) start--;
  let end = at;
  while (end < lines.length - 1 && !/^ {2}\},?$/.test(lines[end])) end++;
  return [start, end];
}

function latest(sources) {
  let max = '';
  for (const [file, [start, end]] of sources) {
    const dates = lineDates(file);
    for (let i = start; i <= end; i++) if (dates[i] > max) max = dates[i];
  }
  return max;
}

function lastCommitOf(file) {
  const out = git(['log', '-1', '--format=%cI', '--', file]).trim();
  return out ? new Date(out).toISOString().slice(0, 10) : TODAY;
}

function slugsFrom(file, pattern) {
  return [...readFileSync(file, 'utf8').matchAll(pattern)].map((m) => m[1]);
}

function build() {
  const presetSlugs = slugsFrom('src/data/presets.ts', /^ {4}slug: '([a-z0-9-]+)'/gm);
  const temps = slugsFrom('src/lib/temp-landings.ts', /^ {2}\{ tempF: (\d+),/gm);
  // Tool pages: their own sections of the main locale dictionary.
  const toolSections = {
    '/': ['home'],
    '/oven-to-air-fryer': ['tool', 'converter'],
    '/air-fryer-to-oven': ['reverseTool', 'reverseConverter'],
    '/convection-to-air-fryer': ['convectionTool', 'convectionConverter'],
    '/air-fryer-to-convection': ['reverseConvectionTool', 'reverseConvectionConverter'],
    '/frozen': ['frozenTool', 'frozenConverter'],
    '/chart': ['chart'],
  };

  const dates = {};
  for (const l of LOCALES) {
    const main = `src/i18n/dictionaries/${l}.ts`;
    const presetsDict = `src/i18n/dictionaries/presets/${l}.ts`;
    const tempDict = `src/i18n/dictionaries/temp-landings/${l}.ts`;
    for (const [slug, sections] of Object.entries(toolSections)) {
      dates[`${l}:${slug}`] = latest(sections.map((s) => [main, entryRange(main, s, 2)]));
    }
    for (const t of temps) {
      dates[`${l}:/${t}-to-air-fryer`] = latest([
        ['src/lib/temp-landings.ts', arrayElementRange('src/lib/temp-landings.ts', `{ tempF: ${t},`)],
        [tempDict, entryRange(tempDict, t, 4)],
      ]);
    }
    const presetsLines = fileLines(presetsDict);
    const indexStart = presetsLines.findIndex((x) => x.startsWith('export const presetsIndex'));
    dates[`${l}:/presets`] = latest([[presetsDict, [indexStart, presetsLines.length - 1]]]);
    for (const slug of presetSlugs) {
      dates[`${l}:/air-fryer/${slug}`] = latest([
        ['src/data/presets.ts', arrayElementRange('src/data/presets.ts', `slug: '${slug}'`)],
        [presetsDict, entryRange(presetsDict, slug, 4)],
      ]);
    }
  }
  // English-only pages. A brand page: that brand's model rows plus its page copy (no sourced model,
  // no page). The model table: every row plus its own copy.
  const models = 'src/data/models.ts';
  const brandsDict = 'src/i18n/dictionaries/brands/en.ts';
  const brandPaths = [...readFileSync('src/lib/brands.ts', 'utf8').matchAll(/^ {2}\{ key: '([a-z]+)', path: '(\/[a-z-]+)'/gm)];
  const modelRows = [...readFileSync(models, 'utf8').matchAll(/id: '([a-z0-9-]+)', brand: '([a-z]+)'/g)];
  for (const [, brand, path] of brandPaths) {
    const rows = modelRows.filter((m) => m[2] === brand);
    if (!rows.length) continue;
    dates[`en:${path}`] = latest([
      ...rows.map((m) => [models, arrayElementRange(models, `id: '${m[1]}'`)]),
      [brandsDict, entryRange(brandsDict, brand, 4)],
    ]);
  }
  dates['en:/model-max-temp'] = latest([
    [models, [0, fileLines(models).length - 1]],
    [brandsDict, entryRange(brandsDict, 'maxTemp', 2)],
  ]);
  for (const page of ['about', 'contact', 'privacy-policy', 'terms']) {
    dates[`en:/${page}`] = lastCommitOf(`src/pages/${page}.astro`);
  }
  return dates;
}

if (!historyAvailable()) {
  if (!existsSync(OUT)) throw new Error(`content-dates: no git history and no ${OUT}`);
  console.log(`content-dates: no full git history here; using the committed ${OUT}`);
} else {
  const dates = build();
  const json = `${JSON.stringify(dates, null, 2)}\n`;
  const before = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
  if (json !== before) writeFileSync(OUT, json);
  console.log(`content-dates: ${Object.keys(dates).length} URLs dated from git${json === before ? ' (unchanged)' : ''}`);
}
