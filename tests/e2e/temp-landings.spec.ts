import { test, expect, type Page } from '@playwright/test';
import { computeAirFryerSetting, FOODS, type FoodKey, type FryerStyle } from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import {
  C_TEMP_LANDINGS,
  TEMP_LANDINGS,
  TEMP_LANDING_MINUTES,
  fillPlaceholders,
  tempLandingSlug,
  tempLandingValues,
  type TempLandingF,
  cTempLandingSlug,
  cTempLandingValues,
  FAN_OFFSET_C,
} from '../../src/lib/temp-landings';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { OVEN_MARK_SCALE } from '../../src/i18n/locales';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, DEFAULT_LOCALE } from '../../src/i18n/locales';
import { localizedPath, localizedUrl } from '../../src/i18n/utils';

const FOOD_KEYS = Object.keys(FOODS) as FoodKey[];
const STYLES: FryerStyle[] = ['basket', 'oven'];
const en = getDictionary('en');

async function collectPageErrors(page: Page): Promise<Error[]> {
  const pageErrors: Error[] = [];
  page.on('pageerror', (err) => pageErrors.push(err));
  return pageErrors;
}

/** Straight from the engine, independent of tempLandingValues, so a bug there can't hide behind itself. */
const engine = (tempF: number, food: FoodKey, style: FryerStyle, ovenMinutes = TEMP_LANDING_MINUTES) =>
  computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes, food, style });
const pctLess = (tempF: number, food: FoodKey, style: FryerStyle) => 100 - engine(tempF, food, style, 100).outMinutes!;

function expectedAnswer(dict: ReturnType<typeof getDictionary>['tempLanding'], tempF: number): string {
  const r = engine(tempF, 'general', 'basket');
  return (r.capped ? dict.answerCappedTemplate : dict.answerTemplate)
    .replace('{OVEN_F}', String(tempF))
    .replace('{AF_F}', String(r.outF))
    .replace('{AF_C}', String(r.outC))
    .replace('{CEILING}', String(r.ceiling))
    .replace('{PCT}', String(pctLess(tempF, 'general', 'basket')));
}

/** All of one page's own copy, placeholders filled — what the similarity check compares. */
function pageCopy(locale: (typeof LOCALES)[number]['code'], tempF: TempLandingF): string {
  const landing = TEMP_LANDINGS.find((l) => l.tempF === tempF)!;
  const c = getDictionary(locale).tempLanding.pages[tempF];
  const parts = [c.subDesc, c.recipesBody, c.failureBody, c.workedExampleTemplate, c.styleBody, ...c.faqs.flatMap((f) => [f.q, f.a])];
  return parts.map((p) => fillPlaceholders(p, tempLandingValues(landing))).join(' ');
}

function shingles(text: string, n = 4): Set<string> {
  const words = text.toLowerCase().replace(/[0-9]+/g, '#').match(/[\p{L}#°%]+/gu) ?? [];
  const out = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) out.add(words.slice(i, i + n).join(' '));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

test.describe('temperature landing pages', () => {
  for (const landing of TEMP_LANDINGS) {
    const { tempF } = landing;
    const slug = tempLandingSlug(tempF);
    const copy = en.tempLanding.pages[tempF];
    const values = tempLandingValues(landing);

    test(`${slug} renders with zero page errors and a self canonical`, async ({ page }) => {
      const pageErrors = await collectPageErrors(page);
      const response = await page.goto(slug);
      expect(response?.status()).toBe(200);
      await expect(page.locator('.tool-header h1')).toHaveText(fillPlaceholders(copy.heading, values));
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl('en', slug));
      for (const alt of LOCALES) {
        await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', localizedUrl(alt.code, slug));
      }
      // Every {KEY} was filled — none leak into the rendered page or its meta.
      expect(await page.locator('body').innerText()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      expect(await page.title()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      expect(pageErrors).toEqual([]);
    });

    test(`${slug} direct answer matches the engine`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#tl-answer')).toHaveText(expectedAnswer(en.tempLanding, tempF));
      const oven = engine(tempF, 'general', 'oven');
      await expect(page.locator('#tl-answer-oven')).toHaveText(
        en.tempLanding.answerOvenStyleTemplate
          .replace('{OS_F}', String(oven.outF))
          .replace('{OS_C}', String(oven.outC))
          .replace('{OS_PCT}', String(pctLess(tempF, 'general', 'oven'))),
      );
    });

    test(`${slug} widget is pre-filled with ${tempF}°F and stays live`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#afk-temp')).toHaveValue(String(tempF));
      await expect(page.locator('#afk-food')).toHaveValue('general');
      await expect(page.locator('#afk-style-basket')).toHaveClass(/active/);
      const r = engine(tempF, 'general', 'basket');
      await expect(page.locator('#afk-out-main')).toHaveText(`${r.outF}°F`);
      await expect(page.locator('#afk-out-time')).toHaveText(String(r.outMinutes));
      await expect(page.locator('#afk-capped')).toBeVisible({ visible: r.capped });

      // Editable and live: a different temperature and food recompute without a button.
      await page.fill('#afk-temp', '360');
      await page.selectOption('#afk-food', 'fish');
      await expect(page.locator('#afk-out-main')).toHaveText(`${engine(360, 'fish', 'basket').outF}°F`);
    });

    test(`${slug} per-food table matches the engine for every food and style, clamp rows marked`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#tl-food-table tbody tr')).toHaveCount(FOOD_KEYS.length);
      let cappedCells = 0;
      for (const food of FOOD_KEYS) {
        const row = page.locator(`#tl-food-table tr[data-food="${food}"]`);
        await expect(row.locator('.food-cell')).toHaveText(en.converter.foods[food].label);
        for (const style of STYLES) {
          const r = engine(tempF, food, style);
          const cell = row.locator(`td[data-style="${style}"]`);
          await expect(cell.locator('.cell-temp')).toHaveText(`${r.outF}°F / ${r.outC}°C`);
          await expect(cell.locator('.cell-meta')).toContainText(
            en.tempLanding.timeLessTemplate.replace('{PCT}', String(pctLess(tempF, food, style))),
          );
          if (r.gasMark) await expect(cell.locator('.cell-meta')).toContainText(`${en.converter.gasMark} ${r.gasMark}`);
          await expect(cell.locator('.capped-chip')).toHaveCount(r.capped ? 1 : 0);
          if (r.capped) {
            cappedCells++;
            expect(r.outF).toBe(r.ceiling);
          }
        }
      }
      await expect(page.locator('#tl-capped-footnote')).toHaveCount(cappedCells > 0 ? 1 : 0);
    });

    test(`${slug} links to its neighbours, the flagship, /chart and /frozen`, async ({ page }) => {
      await page.goto(slug);
      const i = TEMP_LANDINGS.findIndex((l) => l.tempF === tempF);
      const neighbours = [TEMP_LANDINGS[i - 1], TEMP_LANDINGS[i + 1]].filter(Boolean);
      await expect(page.locator('.neighbour-link')).toHaveCount(neighbours.length);
      for (const n of neighbours) {
        await expect(page.locator(`.neighbour-link a[href="${tempLandingSlug(n.tempF)}"]`)).toHaveText(
          en.tempLanding.neighbourLinkTemplate.replace('{OVEN_F}', String(n.tempF)),
        );
      }
      for (const target of ['/oven-to-air-fryer', '/chart', '/frozen']) {
        await expect(page.locator(`.related-link a[href="${target}"]`)).toHaveCount(1);
      }
    });

    test(`${slug} emits WebApplication + FAQPage JSON-LD with every FAQ filled`, async ({ page }) => {
      await page.goto(slug);
      const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
      expect(raw).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      const graph = JSON.parse(raw!)['@graph'] as { '@type': string; url?: string; mainEntity?: { name: string }[] }[];
      expect(graph.map((n) => n['@type'])).toEqual(['WebApplication', 'FAQPage']);
      expect(graph[0].url).toBe(localizedUrl('en', slug));
      expect(graph[1].mainEntity).toHaveLength(copy.faqs.length);
      expect(copy.faqs.length).toBe(5);
    });
  }

  test('clamp coverage is real: some page clamps every basket row, some clamps none', () => {
    const cappedPerPage = TEMP_LANDINGS.map(({ tempF }) => FOOD_KEYS.filter((f) => engine(tempF, f, 'basket').capped).length);
    expect(cappedPerPage).toContain(FOOD_KEYS.length);
    expect(cappedPerPage).toContain(0);
  });

  test('every landing has a °F→°C FAQ', () => {
    for (const l of LOCALES) {
      for (const { tempF } of TEMP_LANDINGS) {
        const faqs = getDictionary(l.code).tempLanding.pages[tempF].faqs;
        expect(faqs.some((f) => f.a.includes('{OVEN_C}°C')), `${l.code} ${tempF}`).toBe(true);
      }
    }
  });

  test('each page’s copy is its own, not a template with the number swapped', () => {
    let maxSimilarity = 0;
    for (const l of LOCALES) {
      const sets = TEMP_LANDINGS.map(({ tempF }) => shingles(pageCopy(l.code, tempF)));
      for (let i = 0; i < sets.length; i++) {
        for (let j = i + 1; j < sets.length; j++) {
          const sim = jaccard(sets[i], sets[j]);
          maxSimilarity = Math.max(maxSimilarity, sim);
          expect(sim, `${l.code}: ${TEMP_LANDINGS[i].tempF} vs ${TEMP_LANDINGS[j].tempF}`).toBeLessThan(0.15);
        }
      }
    }
    expect(maxSimilarity).toBeGreaterThan(0); // shared phrasing exists, so the check is measuring something
  });
});

test.describe('temperature landing pages: registration, /chart, homepage and locales', () => {
  test('every landing slug is in LIVE_PAGES and TRANSLATED_PAGES', () => {
    const translated = TRANSLATED_PAGES.map((p) => p.slug);
    for (const { tempF } of TEMP_LANDINGS) {
      expect(LIVE_PAGES.has(tempLandingSlug(tempF))).toBe(true);
      expect(translated).toContain(tempLandingSlug(tempF));
    }
  });

  test('sitemap lists every locale of every landing', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const { tempF } of TEMP_LANDINGS) {
      for (const l of LOCALES) expect(xml).toContain(`<loc>${localizedUrl(l.code, tempLandingSlug(tempF))}</loc>`);
    }
  });

  for (const code of [DEFAULT_LOCALE, 'es'] as const) {
    test(`/chart (${code}) links each temperature row to its landing page, gated by LIVE_PAGES`, async ({ page }) => {
      await page.goto(localizedPath(code, '/chart'));
      const rows = page.locator('.table-card').first().locator('tbody tr');
      await expect(rows).toHaveCount(TEMP_STEPS.length);
      let linked = 0;
      for (const [i, ovenF] of TEMP_STEPS.entries()) {
        const link = rows.nth(i).locator('td').first().locator('a');
        const live = LIVE_PAGES.has(tempLandingSlug(ovenF));
        await expect(link).toHaveCount(live ? 1 : 0);
        if (live) {
          linked++;
          await expect(link).toHaveAttribute('href', localizedPath(code, tempLandingSlug(ovenF)));
          await expect(link).toHaveText(`${ovenF}°F`);
        }
      }
      expect(linked).toBe(TEMP_LANDINGS.length);
    });
  }

  for (const code of [DEFAULT_LOCALE, 'es'] as const) {
    test(`homepage rail (${code}) links the landing pages with engine values`, async ({ page }) => {
      const dict = getDictionary(code).home;
      await page.goto(localizedPath(code, '/'));
      const items = page.locator('.rail-list .rail-item');
      await expect(items).toHaveCount(TEMP_LANDINGS.length);
      for (let i = 0; i < TEMP_LANDINGS.length; i++) {
        const { tempF } = TEMP_LANDINGS[i];
        const item = items.nth(i);
        const r = engine(tempF, 'general', 'basket');
        await expect(item).toHaveAttribute('href', localizedPath(code, tempLandingSlug(tempF)));
        await expect(item.locator('.rail-num').nth(1)).toHaveText(`${r.outF}°F`);
        // The ceiling label sits only on the capped row (450°F); the others state the engine's time cut.
        await expect(item.locator('.rail-note')).toHaveText(
          r.capped ? dict.commonConversions.ceiling : dict.commonConversions.timeCut.replace('{PCT}', String(pctLess(tempF, 'general', 'basket'))),
        );
        await expect(item).not.toContainText(dict.comingSoon);
      }
      await expect(items.last().locator('.rail-note')).toHaveText(dict.commonConversions.ceiling);
    });
  }

  for (const width of [375, 412]) {
    test(`landing pages have no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 860 });
      for (const { tempF } of TEMP_LANDINGS) {
        await page.goto(tempLandingSlug(tempF));
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `${tempF} at ${width}px`).toBeLessThanOrEqual(0);
        for (const box of await page.locator('.widget-card .seg-btn, .widget-card input, .widget-card select, .related-link a, .faq-q').all()) {
          expect((await box.boundingBox())!.height).toBeGreaterThanOrEqual(44);
        }
      }
    });
  }

  for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) {
    test(`/${l.code} landing pages render translated with canonical, hreflang and engine answers`, async ({ page }) => {
      const pageErrors = await collectPageErrors(page);
      const dict = getDictionary(l.code).tempLanding;
      for (const landing of TEMP_LANDINGS) {
        const slug = tempLandingSlug(landing.tempF);
        const response = await page.goto(localizedPath(l.code, slug));
        expect(response?.status()).toBe(200);
        await expect(page.locator('.tool-header h1')).toHaveText(fillPlaceholders(dict.pages[landing.tempF].heading, tempLandingValues(landing)));
        await expect(page.locator('#tl-answer')).toHaveText(expectedAnswer(dict, landing.tempF));
        await expect(page.locator('#afk-temp')).toHaveValue(String(landing.tempF));
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(l.code, slug));
        await expect(page.locator(`link[rel="alternate"][hreflang="${DEFAULT_LOCALE}"]`)).toHaveAttribute('href', localizedUrl(DEFAULT_LOCALE, slug));
        await expect(page.locator(`.related-link a[href="${localizedPath(l.code, '/chart')}"]`)).toHaveCount(1);
        expect(await page.locator('body').innerText()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      }
      expect(pageErrors).toEqual([]);
    });
  }
});

test.describe('°C landing pages: typed numbers and registration', () => {
  // Every {KEY} in a c-temp-landing dictionary entry is filled from cTempLandingValues,
  // so no engine number may be typed into the prose. The °C pages are data-driven from
  // C_TEMP_LANDINGS, so the test iterates the array and the dictionary together.
  const ALL_C = C_TEMP_LANDINGS;

  test('no engine number is typed into the copy: every °C/°F/gas mark in the prose comes from a placeholder', () => {
    for (const l of LOCALES) {
      const dict = getDictionary(l.code).cTempLanding;
      for (const landing of ALL_C) {
        // Check the FILLED dictionary strings AFTER fillPlaceholders, like the presets test does.
        // Strip placeholders and verify the page's own temperature and gas mark don't appear as raw numbers.
        const values = cTempLandingValues(landing, l.code);
        const prose = cTempStrings(dict, landing)
          .map((s) => fillPlaceholders(s, values))
          .join(' ')
          .replace(/\{[A-Z][A-Z0-9_]*\}/g, '');
        // The typed numbers that must NOT appear after stripping placeholders:
        // the page's conventional temperature, fan input, oven F, air fryer answers, and gas mark.
        const typed = [
          landing.tempC,
          Number(values.FAN_C),
          Number(values.OVEN_F),
          Number(values.AF_C),
          Number(values.AF_F),
          Number(values.FAN_AF_C),
          Number(values.FAN_AF_F),
        ];
        for (const n of typed) {
          expect(prose, `${l.code} ${landing.tempC}°C typed ${n}`).not.toMatch(new RegExp(`(?:^|\\D)${n}(?:°C|°F)`));
        }
        expect(prose, `${l.code} ${landing.tempC}°C typed gas mark`).not.toMatch(new RegExp(`(?:gas mark|Gasstufe|marca de gas|thermostat) ${values.OVEN_MARK}\\b`));
      }
    }
  });

  test('every °C page in every locale returns 200 and renders translated', async ({ page }) => {
    for (const l of LOCALES) {
      for (const landing of ALL_C) {
        const slug = cTempLandingSlug(landing.tempC);
        const response = await page.goto(localizedPath(l.code, slug));
        expect(response?.status(), `${l.code} ${slug}`).toBe(200);
        const dict = getDictionary(l.code).cTempLanding;
        await expect(page.locator('.tool-header h1')).toHaveText(
          fillPlaceholders(dict.pages[landing.tempC].heading, cTempLandingValues(landing, l.code)),
        );
        expect(await page.locator('body').innerText()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      }
    }
  });

  test('conventional / fan / gas mark inputs return the flagship, convection and mark-mapped answers', async ({ page }) => {
    for (const landing of ALL_C) {
      const slug = cTempLandingSlug(landing.tempC);
      await page.goto(slug);
      const values = cTempLandingValues(landing, 'en');
      // Conventional °C -> flagship engine answer
      await expect(page.locator('#ctl-answer')).toHaveText(
        fillPlaceholders(getDictionary('en').cTempLanding.answerTemplate, values),
      );
      // Fan °C -> convection engine answer
      await page.click('#tl-mode-fan');
      await expect(page.locator('#ctl-answer-fan')).toHaveText(
        fillPlaceholders(getDictionary('en').cTempLanding.answerFanTemplate, values),
      );
      // Gas mark -> mark-mapped conventional °C
      await page.click('#tl-mode-gas');
      await expect(page.locator('#tl-mode-gas')).toHaveClass(/active/);
      await expect(page.locator('#ctl-answer')).toContainText(String(landing.tempC));
      await page.click('#tl-mode-c');
    }
  });

  test('each °C page has a frozen-pack FAQ that mentions /frozen', async ({ page }) => {
    for (const landing of ALL_C) {
      await page.goto(cTempLandingSlug(landing.tempC));
      const frozenFaqs = getDictionary('en').cTempLanding.pages[landing.tempC].faqs
        .filter((f) => /frozen|congelados|surgelés|congelados|tiefkühl/i.test(f.q))
        .map((f) => f.q);
      for (const q of frozenFaqs) {
        const card = page.locator('.faq-item', { hasText: q });
        await expect(card, q).toBeVisible();
      }
      // Also verify the related link to /frozen is present
      await expect(page.locator(`.related-link a[href$="/frozen"]`)).toHaveCount(1);
    }
  });
});

/** All copy strings for a °C landing page, across the shared keys and the per-temperature page. */
function cTempStrings(dict: ReturnType<typeof getDictionary>['cTempLanding'], landing: (typeof C_TEMP_LANDINGS)[number]): string[] {
  const page = dict.pages[landing.tempC];
  return [
    dict.answerTemplate,
    dict.answerCappedTemplate,
    dict.answerFanTemplate,
    dict.answerFanCappedTemplate,
    dict.answerOvenStyleTemplate,
    dict.tableHeading,
    dict.tableIntro,
    dict.neighbourLinkTemplate,
    dict.relatedNearestFLink,
    dict.widgetNote,
    page.metaTitle,
    page.metaDescription,
    page.heading,
    page.subDesc,
    page.recipesBody,
    page.failureBody,
    page.workedExampleTemplate,
    page.fanWorkedExampleTemplate,
    page.styleBody,
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ];
}
