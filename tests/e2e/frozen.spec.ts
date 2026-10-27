import { test, expect, type Page } from '@playwright/test';
import {
  computeAirFryerSettingFromFrozen,
  computePackSetting,
  cappedNote,
  fanPackOffset,
  CONVECTION_FOODS,
  FOODS,
  FROZEN_FOODS,
  type FrozenConversionResult,
  type FrozenFoodKey,
  type FryerStyle,
  type PackType,
} from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { PRESETS } from '../../src/data/presets';
import { presetPath } from '../../src/lib/preset-paths';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, DEFAULT_LOCALE } from '../../src/i18n/locales';
import { localizedPath, localizedUrl } from '../../src/i18n/utils';

const FOOD_KEYS = Object.keys(FROZEN_FOODS) as FrozenFoodKey[];
const STYLES: FryerStyle[] = ['basket', 'oven'];
const PACKS: PackType[] = ['conventional', 'fan'];
const en = getDictionary('en');
const fd = en.frozenConverter;

async function collectPageErrors(page: Page): Promise<Error[]> {
  const pageErrors: Error[] = [];
  page.on('pageerror', (err) => pageErrors.push(err));
  return pageErrors;
}

/** The turn line exactly as the widget should word it, built from the dictionary and engine output. */
function expectedTurnText(r: FrozenConversionResult): string {
  if (r.turns === 0) return fd.noTurn;
  const t = r.turnAtMinutes;
  const times = t.length <= 1 ? t.join('') : `${t.slice(0, -1).join(', ')}${fd.listJoin}${t[t.length - 1]}`;
  return fd.turnAtTemplate.replace('{action}', r.turn === 'shake' ? fd.shake : fd.flip).replace('{times}', times);
}

const fillInternal = (template: string, r: FrozenConversionResult) =>
  template.replace('{f}', String(r.internalF)).replace('{c}', String(r.internalC));

test.describe('/frozen', () => {
  test('renders with zero page errors', async ({ page }) => {
    const pageErrors = await collectPageErrors(page);
    const response = await page.goto('/frozen');
    expect(response?.status()).toBe(200);
    await expect(page.locator('.tool-header h1')).toHaveText(en.frozenTool.heading);
    await expect(page.locator('.widget-head')).toContainText(fd.widgetLabel);
    expect(pageErrors).toEqual([]);
  });

  test('widget result matches computeAirFryerSettingFromFrozen for the default inputs', async ({ page }) => {
    await page.goto('/frozen');

    // Defaults come from ConverterWidget.astro frozen mode: 425°F / 20 min, fries, basket, conventional pack.
    const expected = computeAirFryerSettingFromFrozen({ ovenTemp: 425, unit: 'F', ovenMinutes: 20, food: 'fries', style: 'basket', pack: 'conventional' });

    await expect(page.locator('#afk-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afk-out-time')).toHaveText(String(expected.outMinutes));
    await expect(page.locator('#afk-check-at')).toHaveText(String(expected.checkAtMinutes));
    await expect(page.locator('#afk-turns')).toHaveText(expectedTurnText(expected));
    await expect(page.locator('#afk-pack-conventional')).toHaveClass(/active/);
  });

  test('every frozen food tracks the engine: temp, time, turns, internal temp and raw warning', async ({ page }) => {
    await page.goto('/frozen');
    await page.fill('#afk-temp', '400');
    await page.fill('#afk-time', '30');

    for (const food of FOOD_KEYS) {
      await page.selectOption('#afk-food', food);
      const r = computeAirFryerSettingFromFrozen({ ovenTemp: 400, unit: 'F', ovenMinutes: 30, food, style: 'basket', pack: 'conventional' });

      await expect(page.locator('#afk-out-main')).toHaveText(`${r.outF}°F`);
      await expect(page.locator('#afk-out-time')).toHaveText(String(r.outMinutes));
      await expect(page.locator('#afk-turns')).toHaveText(expectedTurnText(r));
      await expect(page.locator('#afk-tip')).toHaveText(fd.foods[food].tip);

      if (r.internalF !== null) {
        await expect(page.locator('#afk-internal')).toBeVisible();
        await expect(page.locator('#afk-internal')).toHaveText(fillInternal(fd.internalTemplate, r));
      } else {
        await expect(page.locator('#afk-internal')).toBeHidden();
      }

      if (FROZEN_FOODS[food].raw) {
        await expect(page.locator('#afk-raw')).toBeVisible();
        await expect(page.locator('#afk-raw-text')).toHaveText(fillInternal(fd.rawWarningTemplate, r));
      } else {
        await expect(page.locator('#afk-raw')).toBeHidden();
      }
    }
  });

  test('raw-chicken warning covers exactly raw breast, wings and tenders, each with a 165°F target', () => {
    const rawFoods = FOOD_KEYS.filter((k) => FROZEN_FOODS[k].raw).sort();
    expect(rawFoods).toEqual(['rawChicken', 'tenders', 'wings']);
    for (const k of rawFoods) expect(FROZEN_FOODS[k].internalF).toBe(165);
  });

  test('fan pack adds back the per-food FOODS − CONVECTION_FOODS gap instead of cutting again', () => {
    for (const food of FOOD_KEYS) {
      const like = FROZEN_FOODS[food].like;
      expect(fanPackOffset(food)).toBe(FOODS[like].dT - CONVECTION_FOODS[like].dT);
      for (const style of STYLES) {
        for (const ovenTemp of TEMP_STEPS) {
          const input = { ovenTemp, unit: 'F', ovenMinutes: 20, food, style } as const;
          const conv = computeAirFryerSettingFromFrozen({ ...input, pack: 'conventional' });
          const fan = computeAirFryerSettingFromFrozen({ ...input, pack: 'fan' });
          expect(fan.outF!).toBeGreaterThanOrEqual(conv.outF!);
          if (!fan.capped && !conv.capped) expect(fan.outMinutes).toBe(conv.outMinutes);
        }
      }
    }
  });

  test('widget fan-pack toggle tracks the engine', async ({ page }) => {
    await page.goto('/frozen');
    await page.click('#afk-unit-c');
    await page.fill('#afk-temp', '200');
    await page.fill('#afk-time', '20');
    await page.click('#afk-pack-fan');
    await expect(page.locator('#afk-pack-fan')).toHaveClass(/active/);

    const fan = computeAirFryerSettingFromFrozen({ ovenTemp: 200, unit: 'C', ovenMinutes: 20, food: 'fries', style: 'basket', pack: 'fan' });
    const conv = computeAirFryerSettingFromFrozen({ ovenTemp: 200, unit: 'C', ovenMinutes: 20, food: 'fries', style: 'basket', pack: 'conventional' });
    expect(fan.outF).not.toBe(conv.outF);

    await expect(page.locator('#afk-out-main')).toHaveText(`${fan.outC}°C`);
    await expect(page.locator('#afk-out-time')).toHaveText(String(fan.outMinutes));

    await page.click('#afk-pack-conventional');
    await expect(page.locator('#afk-out-main')).toHaveText(`${conv.outC}°C`);
  });

  test('frozen logic is inverted: smaller temp cut and bigger-or-equal time cut than the oven table, except raw breast', () => {
    for (const food of FOOD_KEYS) {
      const { dT, f, like } = FROZEN_FOODS[food];
      if (food === 'rawChicken') {
        // Lower and slower: the time cut is smaller than fresh breast's.
        expect(f).toBeGreaterThan(FOODS[like].f);
        continue;
      }
      expect(dT).toBeLessThan(FOODS[like].dT);
      expect(dT).toBeLessThanOrEqual(15);
      expect(f).toBeLessThanOrEqual(FOODS[like].f);
    }
  });

  test('ceiling clamp: every food/style/pack is held at or below its ceiling, capped means exactly at it', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const pack of PACKS) {
          for (const ovenTemp of TEMP_STEPS) {
            const r = computeAirFryerSettingFromFrozen({ ovenTemp, unit: 'F', ovenMinutes: 100, food, style, pack });
            expect(r.outF!).toBeLessThanOrEqual(r.ceiling);
            if (r.capped) expect(r.outF).toBe(r.ceiling);
          }
        }
      }
    }
  });

  test('widget shows the capped note when the pack temperature exceeds the unit ceiling', async ({ page }) => {
    await page.goto('/frozen');
    await page.fill('#afk-temp', '450');
    const r = computeAirFryerSettingFromFrozen({ ovenTemp: 450, unit: 'F', ovenMinutes: 20, food: 'fries', style: 'basket', pack: 'conventional' });
    expect(r.capped).toBe(true);

    await expect(page.locator('#afk-capped')).toBeVisible();
    await expect(page.locator('#afk-capped-text')).toHaveText(cappedNote(en.converter.cappedNoteTemplate, en.converter.unitBasket, r));
    await expect(page.locator('#afk-out-main')).toHaveText(`${r.ceiling}°F`);

    await page.fill('#afk-temp', '375');
    await expect(page.locator('#afk-capped')).toBeHidden();
  });

  test('computePackSetting inverts the frozen engine: forward(reverse(x)) within 25°F and 10% of the minutes', () => {
    const failures: string[] = [];
    for (const food of FOOD_KEYS) {
      for (const pack of PACKS) {
        for (const style of STYLES) {
          const ceiling = style === 'oven' ? 450 : 400;
          for (let tempF = 300; tempF <= ceiling; tempF += 5) {
            for (let minutes = 8; minutes <= 40; minutes++) {
              const p = computePackSetting({ tempF, minutes, food, pack, style });
              const r = computeAirFryerSettingFromFrozen({ ovenTemp: p.outF!, unit: 'F', ovenMinutes: p.outMinutes!, food, pack, style });
              if (p.outF! % 25 !== 0 || Math.abs(r.outF! - tempF) > 25 || Math.abs(r.outMinutes! - minutes) / minutes > 0.1) {
                failures.push(`${food}/${pack}/${style} ${tempF}°F ${minutes} min -> pack ${p.outF}°F ${p.outMinutes} min -> ${r.outF}°F ${r.outMinutes} min`);
              }
            }
          }
        }
      }
    }
    expect(failures).toEqual([]);
  });

  test('computePackSetting: when two dial steps give the same air fryer setting, the hotter pack wins; otherwise the closer one', () => {
    const tieFoods = new Set<string>();
    const failures: string[] = [];
    for (const food of FOOD_KEYS) {
      for (const pack of PACKS) {
        for (const style of STYLES) {
          const ceiling = style === 'oven' ? 450 : 400;
          for (let tempF = 300; tempF <= ceiling; tempF += 5) {
            const p = computePackSetting({ tempF, minutes: 15, food, pack, style });
            const fwd = (packF: number) => computeAirFryerSettingFromFrozen({ ovenTemp: packF, unit: 'F', ovenMinutes: 15, food, pack, style }).outF!;
            // The two dial steps either side of the exact inverse (tempF + the profile's cut).
            const dT = Math.max(0, FROZEN_FOODS[food].dT - (style === 'oven' ? 5 : 0)) - (pack === 'fan' ? fanPackOffset(food) : 0);
            const lo = Math.floor((tempF + dT) / 25) * 25;
            const hi = lo + 25;
            const tie = fwd(lo) === fwd(hi);
            if (tie) tieFoods.add(food);
            const expected = tie || Math.abs(fwd(hi) - tempF) < Math.abs(fwd(lo) - tempF) ? hi : lo;
            if (p.outF !== expected) failures.push(`${food}/${pack}/${style} ${tempF}: got ${p.outF}, expected ${expected}${tie ? ' (tie: hotter wins)' : ''}`);
          }
        }
      }
    }
    expect(failures).toEqual([]);
    expect(tieFoods.size, `ties seen for ${[...tieFoods].join(', ')}`).toBeGreaterThan(1);
    // The case that motivated it: a US fries bag prints 425°F, and 400°F would map lower, not to the same setting.
    expect(computePackSetting({ tempF: 400, minutes: 15, food: 'fries', pack: 'conventional', style: 'basket' }).outF).toBe(425);
    // Wings at the ceiling: 400°F and 425°F packs both give 400°F, so the hotter wins.
    const fwdWings = (packF: number) => computeAirFryerSettingFromFrozen({ ovenTemp: packF, unit: 'F', ovenMinutes: 20, food: 'wings', pack: 'conventional', style: 'basket' }).outF;
    expect(fwdWings(400)).toBe(fwdWings(425));
    expect(computePackSetting({ tempF: 400, minutes: 20, food: 'wings', pack: 'conventional', style: 'basket' }).outF).toBe(425);
    // Below the ceiling nothing ties, so the nearest dial is unchanged.
    expect(computePackSetting({ tempF: 350, minutes: 20, food: 'wings', pack: 'conventional', style: 'basket' }).outF).toBe(350);
  });

  test('computePackSetting: a fan pack prints lower than a conventional pack for the same air fryer setting', () => {
    for (const food of FOOD_KEYS) {
      const conv = computePackSetting({ tempF: 380, minutes: 15, food, pack: 'conventional', style: 'basket' });
      const fan = computePackSetting({ tempF: 380, minutes: 15, food, pack: 'fan', style: 'basket' });
      expect(fan.outF!, food).toBeLessThanOrEqual(conv.outF!);
      expect(fan.outMinutes, food).toBe(conv.outMinutes);
    }
  });

  test('turn marks are evenly spaced inside the cook, one per FROZEN_FOODS turn', () => {
    for (const food of FOOD_KEYS) {
      for (const ovenMinutes of [10, 20, 35, 60]) {
        const r = computeAirFryerSettingFromFrozen({ ovenTemp: 400, unit: 'F', ovenMinutes, food, style: 'basket', pack: 'conventional' });
        expect(r.turnAtMinutes).toHaveLength(FROZEN_FOODS[food].turns);
        r.turnAtMinutes.forEach((m, i) => {
          expect(m).toBeGreaterThan(0);
          expect(m).toBeLessThan(r.outMinutes!);
          if (i > 0) expect(m).toBeGreaterThan(r.turnAtMinutes[i - 1]);
        });
      }
    }
  });

  test('?food= preselects the food (homepage teaser hand-off)', async ({ page }) => {
    await page.goto('/frozen?food=wings');
    await expect(page.locator('#afk-food')).toHaveValue('wings');
    await expect(page.locator('#afk-raw')).toBeVisible();

    await page.goto('/frozen?food=not-a-food');
    await expect(page.locator('#afk-food')).toHaveValue('fries');
  });

  test('cross-links to the flagship, both convection pages and /chart', async ({ page }) => {
    await page.goto('/frozen');
    for (const slug of ['/oven-to-air-fryer', '/convection-to-air-fryer', '/air-fryer-to-convection', '/chart']) {
      await expect(page.locator(`.related-link a[href="${slug}"]`)).toHaveCount(1);
    }
  });

  for (const code of ['en', 'de'] as const) {
    test(`/frozen (${code}) links to every live frozen preset, in its own locale`, async ({ page }) => {
      await page.goto(localizedPath(code, '/frozen'));
      const live = PRESETS.filter((p) => p.category === 'frozen').map((p) => presetPath(p.slug)).filter((path) => LIVE_PAGES.has(path));
      expect(live.length).toBeGreaterThan(0);
      const links = page.locator('.preset-link a');
      await expect(links).toHaveCount(live.length);
      for (const [i, path] of live.entries()) await expect(links.nth(i)).toHaveAttribute('href', localizedPath(code, path));
    });
  }

  test('flagship, convection pages and /chart link back to /frozen', async ({ page }) => {
    for (const slug of ['/oven-to-air-fryer', '/convection-to-air-fryer', '/air-fryer-to-convection']) {
      await page.goto(slug);
      await expect(page.locator('.related-link a[href="/frozen"]')).toHaveCount(1);
    }
    await page.goto('/chart');
    await expect(page.locator('.related-links a[href="/frozen"]')).toHaveCount(1);
  });

  test('emits WebApplication + FAQPage JSON-LD with every dictionary FAQ', async ({ page }) => {
    await page.goto('/frozen');
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    const graph = JSON.parse(raw!)['@graph'] as { '@type': string; mainEntity?: unknown[] }[];
    expect(graph.map((n) => n['@type'])).toEqual(['WebApplication', 'FAQPage']);
    expect(graph[1].mainEntity).toHaveLength(en.frozenTool.faqs.length);
  });
});

test.describe('/frozen: registration, homepage and locales', () => {
  test('/frozen is in LIVE_PAGES and TRANSLATED_PAGES', () => {
    expect(LIVE_PAGES.has('/frozen')).toBe(true);
    expect(TRANSLATED_PAGES.map((p) => p.slug)).toContain('/frozen');
  });

  test('sitemap lists every locale of /frozen', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const l of LOCALES) expect(xml).toContain(`<loc>${localizedUrl(l.code, '/frozen')}</loc>`);
  });

  for (const l of LOCALES.filter((x) => x.code === DEFAULT_LOCALE || x.code === 'es')) {
    test(`${l.code} homepage Frozen teaser is live, localized, and preselects the chosen food`, async ({ page }) => {
      await page.goto(localizedPath(l.code, '/'));
      const form = page.locator('#frozen form.teaser-action');
      await expect(form).toHaveAttribute('action', localizedPath(l.code, '/frozen'));
      await expect(form.locator('.go-btn')).not.toContainText(getDictionary(l.code).home.comingSoon);

      await form.locator('select').selectOption('pizza');
      await form.locator('.go-btn').click();
      await expect(page).toHaveURL(new RegExp(`${localizedPath(l.code, '/frozen')}/?\\?food=pizza$`));
      await expect(page.locator('#afk-food')).toHaveValue('pizza');
    });
  }

  for (const width of [375, 412]) {
    test(`/frozen has no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 860 });
      await page.goto('/frozen?food=rawChicken');
      await expect(page.locator('#afk-raw')).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      for (const box of await page.locator('.widget-card .seg-btn, .widget-card input, .widget-card select').all()) {
        expect((await box.boundingBox())!.height).toBeGreaterThanOrEqual(44);
      }
    });
  }

  for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) {
    test(`/${l.code}/frozen renders translated with canonical, hreflang, and zero page errors`, async ({ page }) => {
      const pageErrors = await collectPageErrors(page);
      const dict = getDictionary(l.code);

      const response = await page.goto(localizedPath(l.code, '/frozen'));
      expect(response?.status()).toBe(200);
      await expect(page.locator('.tool-header h1')).toHaveText(dict.frozenTool.heading);
      await expect(page.locator('#afk-pack-fan')).toHaveText(dict.frozenConverter.packFan);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(l.code, '/frozen'));
      for (const alt of LOCALES) {
        await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', localizedUrl(alt.code, '/frozen'));
      }
      await expect(page.locator(`.related-link a[href="${localizedPath(l.code, '/chart')}"]`)).toHaveCount(1);

      expect(pageErrors).toEqual([]);
    });
  }
});
