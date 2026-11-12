// Redesign check: overflow, headline font, text contrast (light + dark) and card radius on every page type.
// Usage: npm run build, then serve dist/client on port 4321 (e.g. `npx http-server dist/client -p 4321 -s`
// or `python -m http.server 4321 -d dist/client`), then: node scripts/redesign-check.cjs
// Exits 1 if anything fails. Server-rendered routes (/preheat, /model-max-temp) are not covered here.
const { chromium } = require('playwright');
const lum = (rgb) => { const m = rgb.match(/[\d.]+/g).map(Number).slice(0, 3).map((x) => x / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)); return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]; };
const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const PAGES = ['index.html', 'oven-to-air-fryer.html', 'air-fryer-to-oven.html', 'convection-to-air-fryer.html', 'frozen.html',
  'air-fryer/frozen-fries.html', 'air-fryer/salmon.html', 'air-fryer/reheat-pizza.html', '400-to-air-fryer.html', '180c-to-air-fryer.html',
  'chart.html', 'presets.html', 'air-fryer-vs-oven-cost.html', 'cosori.html', 'instant-vortex.html', 'about.html', 'terms.html', '404.html',
  'de.html', 'fr/air-fryer/salmon.html', 'es/chart.html', 'pt/220c-to-air-fryer.html'];
(async () => {
  const browser = await chromium.launch();
  const issues = [];
  for (const W of [360, 375, 412, 1280]) {
    for (const scheme of ['light', 'dark']) {
      const ctx = await browser.newContext({ viewport: { width: W, height: 900 }, colorScheme: scheme });
      const page = await ctx.newPage();
      await page.route(/googletagmanager|googlesyndication|cloudflareinsights|doubleclick/, (r) => r.abort());
      for (const u of PAGES) {
        await page.goto('http://localhost:4321/' + u, { waitUntil: 'networkidle' }).catch(() => {});
        // Reveal hidden notes (clamp/raw warnings) so their colours are checked too.
        await page.evaluate(() => document.querySelectorAll('.capped-note, .capped-chip').forEach((e) => { e.hidden = false; e.style.display = e.style.display === 'none' ? '' : e.style.display; }));
        const r = await page.evaluate((W) => {
          const solidBg = (el) => { while (el) { const s = getComputedStyle(el).backgroundColor; const a = s.startsWith('rgba') ? parseFloat(s.split(',')[3]) : 1; if (a >= 1) return s; el = el.parentElement; } return getComputedStyle(document.body).backgroundColor; };
          const over = [...document.querySelectorAll('body *')].filter((e) => { const b = e.getBoundingClientRect(); return b.width > 0 && b.right > W + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('.table-card,.table-scroll,[data-scroll],pre'); })
            .slice(0, 3).map((e) => `${e.tagName.toLowerCase()}.${[...e.classList].join('.')} right=${Math.round(e.getBoundingClientRect().right)}`);
          const texts = [];
          for (const e of document.querySelectorAll('body *')) {
            if (e.closest('[aria-hidden="true"]')) continue;
            if (![...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
            const cs = getComputedStyle(e); const b = e.getBoundingClientRect();
            if (cs.visibility === 'hidden' || cs.display === 'none' || b.width === 0 || parseFloat(cs.opacity) === 0) continue;
            texts.push([cs.color, solidBg(e), parseFloat(cs.fontSize), parseInt(cs.fontWeight, 10), `${e.tagName.toLowerCase()}.${[...e.classList].slice(0, 2).join('.')}`, e.textContent.trim().slice(0, 28)]);
          }
          const h1 = document.querySelector('h1'); const h1f = h1 ? getComputedStyle(h1).fontFamily.split(',')[0].replace(/"/g, '') : 'none';
          const radius = ['.oven-box', '.table-card', '.direct-answer', '.widget-card', '.callout-band'].map((s) => { const e = document.querySelector(s); return e && getComputedStyle(e).borderRadius === '0px' ? s : null; }).filter(Boolean);
          return { sw: document.documentElement.scrollWidth, over, texts, h1f, radius };
        }, W);
        if (r.sw > W || r.over.length) issues.push(`[overflow ${W} ${scheme}] ${u}: page ${r.sw}px; ${r.over.join(' | ')}`);
        const low = [...new Set(r.texts.filter(([fg, bg, size, weight]) => ratio(fg, bg) < (size >= 24 || (size >= 18.66 && weight >= 700) ? 3 : 4.5))
          .map(([fg, bg, , , tag, txt]) => `${tag} "${txt}" ${ratio(fg, bg).toFixed(2)} (${fg} on ${bg})`))].slice(0, 4);
        if (low.length) issues.push(`[contrast ${W} ${scheme}] ${u}: ${low.join(' ; ')}`);
        if (W === 1280 && scheme === 'light') {
          if (u !== '404.html' && r.h1f !== 'Fraunces') issues.push(`[h1 font] ${u}: ${r.h1f}`);
          if (r.radius.length) issues.push(`[radius 0px] ${u}: ${r.radius.join(' ')}`);
        }
      }
      await ctx.close();
    }
  }
  await browser.close();
  if (issues.length) { console.log(issues.join('\n')); console.log(`\nredesign-check: ${issues.length} issue(s)`); process.exit(1); }
  console.log(`redesign-check: ${PAGES.length} pages x 4 widths x 2 themes, no issues`);
})();
