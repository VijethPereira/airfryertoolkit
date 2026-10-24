import { test, expect, type Page } from '@playwright/test';
import {
  computeAirFryerSetting,
  computeAirFryerSettingFromConvection,
  computeConvectionSetting,
  cappedNote,
  CONVECTION_FOODS,
  FOODS,
  type FoodKey,
  type FryerStyle,
} from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, DEFAULT_LOCALE } from '../../src/i18n/locales';
import { localizedPath, localizedUrl } from '../../src/i18n/utils';

const FOOD_KEYS = Object.keys(CONVECTION_FOODS) as FoodKey[];
const STYLES: FryerStyle[] = ['basket', 'oven'];
const en = getDictionary('en');

async function collectPageErrors(page: Page): Promise<Error[]> {
  const pageErrors: Error[] = [];
  page.on('pageerror', (err) => pageErrors.push(err));
  return pageErrors;
}

test.describe('/convection-to-air-fryer', () => {
  test('renders with zero page errors', async ({ page }) => {
    const pageErrors = await collectPageErrors(page);
    const response = await page.goto('/convection-to-air-fryer');
    expect(response?.status()).toBe(200);
    await expect(page.locator('.tool-header h1')).toHaveText(en.convectionTool.heading);
    await expect(page.locator('.widget-head')).toContainText(en.convectionConverter.widgetLabel);
    expect(pageErrors).toEqual([]);
  });

  test('widget result matches computeAirFryerSettingFromConvection for the default inputs', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');

    // Defaults come from ConverterWidget.astro: 400°F / 25 min, general, basket.
    const expected = computeAirFryerSettingFromConvection({ ovenTemp: 400, unit: 'F', ovenMinutes: 25, food: 'general', style: 'basket' });

    await expect(page.locator('#afk-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afk-out-time')).toHaveText(String(expected.outMinutes));
    await expect(page.locator('#afk-check-at')).toHaveText(String(expected.checkAtMinutes));
  });

  test('changing food, temp, time and style tracks the convection engine, not the oven one', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');

    await page.selectOption('#afk-food', 'baked');
    await page.fill('#afk-temp', '350');
    await page.fill('#afk-time', '30');
    await page.click('#afk-style-oven');

    const input = { ovenTemp: 350, unit: 'F', ovenMinutes: 30, food: 'baked', style: 'oven' } as const;
    const expected = computeAirFryerSettingFromConvection(input);
    const oven = computeAirFryerSetting(input);
    // Guard that this input actually distinguishes the two engines.
    expect(expected.outF).not.toBe(oven.outF);

    await expect(page.locator('#afk-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afk-out-time')).toHaveText(String(expected.outMinutes));
  });

  test('ceiling clamp: engine holds every food/style at its ceiling and adds the capped time bonus', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const ovenTemp of TEMP_STEPS) {
          const r = computeAirFryerSettingFromConvection({ ovenTemp, unit: 'F', ovenMinutes: 100, food, style });
          expect(r.outF!).toBeLessThanOrEqual(r.ceiling);
          if (r.capped) expect(r.outF).toBe(r.ceiling);
        }
      }
    }
    // 475°F convection is above both ceilings for every food, so it must cap.
    const capped = computeAirFryerSettingFromConvection({ ovenTemp: 475, unit: 'F', ovenMinutes: 100, food: 'general', style: 'basket' });
    const uncapped = computeAirFryerSettingFromConvection({ ovenTemp: 350, unit: 'F', ovenMinutes: 100, food: 'general', style: 'basket' });
    expect(capped.capped).toBe(true);
    expect(uncapped.capped).toBe(false);
    expect(capped.outMinutes!).toBeGreaterThan(uncapped.outMinutes!);
  });

  test('widget shows the capped note only when the convection temp exceeds the unit ceiling', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');
    await expect(page.locator('#afk-capped')).toBeHidden();

    await page.selectOption('#afk-food', 'wings');
    await page.fill('#afk-temp', '425');
    await page.fill('#afk-time', '40');
    const expected = computeAirFryerSettingFromConvection({ ovenTemp: 425, unit: 'F', ovenMinutes: 40, food: 'wings', style: 'basket' });
    expect(expected.capped).toBe(true);

    await expect(page.locator('#afk-capped')).toBeVisible();
    await expect(page.locator('#afk-capped-text')).toHaveText(
      cappedNote(en.converter.cappedNoteTemplate, en.converter.unitBasket, expected),
    );
    await expect(page.locator('#afk-out-main')).toHaveText(`${expected.ceiling}°F`);
    await expect(page.locator('#afk-out-time')).toHaveText(String(expected.outMinutes));

    // Oven-style's 450°F ceiling holds 425°F wings without clamping.
    await page.click('#afk-style-oven');
    await expect(page.locator('#afk-capped')).toBeHidden();
  });

  test('zero-change oven-style results read as the plain setting, never "−0°F" or "×1.00"', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');
    await page.click('#afk-style-oven');
    const checked: FoodKey[] = [];

    for (const food of FOOD_KEYS) {
      const r = computeAirFryerSettingFromConvection({ ovenTemp: 350, unit: 'F', ovenMinutes: 30, food, style: 'oven' });
      const sameTemp = r.outF === 350;
      const sameTime = r.outMinutes === 30;
      if (!sameTemp && !sameTime) continue;

      await page.selectOption('#afk-food', food);
      await page.fill('#afk-temp', '350');
      await page.fill('#afk-time', '30');

      await expect(page.locator('#afk-out-main')).toHaveText(`${r.outF}°F`);
      await expect(page.locator('#afk-out-time')).toHaveText(String(r.outMinutes));
      const text = await page.locator('.widget-card').innerText();
      expect(text).not.toMatch(/[−-]0°/);
      expect(text).not.toMatch(/×\s*1(\.0+)?\b/);
      checked.push(food);
    }

    // fries/wings/steak (0°F cut) and steak/fish/baked/casserole (1.0 time) must all have been exercised.
    expect(checked).toEqual(expect.arrayContaining(['fries', 'wings', 'steak', 'fish', 'baked', 'casserole']));
  });

  test('the convection cut is never larger than the conventional-oven cut, for any food/style', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const ovenTemp of TEMP_STEPS) {
          const conv = computeAirFryerSettingFromConvection({ ovenTemp, unit: 'F', ovenMinutes: 60, food, style });
          const oven = computeAirFryerSetting({ ovenTemp, unit: 'F', ovenMinutes: 60, food, style });
          expect(conv.outF!).toBeGreaterThanOrEqual(oven.outF!);
          if (!conv.capped && !oven.capped) expect(conv.outMinutes!).toBeGreaterThanOrEqual(oven.outMinutes!);
        }
      }
      expect(CONVECTION_FOODS[food].dT).toBeLessThan(FOODS[food].dT);
      expect(CONVECTION_FOODS[food].f).toBeGreaterThan(FOODS[food].f);
    }
  });

  test('CONVECTION_FOODS stays inside the 0–15°F / 5–10% convection rule of thumb', () => {
    for (const food of FOOD_KEYS) {
      const { dT, f } = CONVECTION_FOODS[food];
      expect(dT).toBeGreaterThanOrEqual(0);
      expect(dT).toBeLessThanOrEqual(15);
      expect(dT % 5).toBe(0);
      expect(f).toBeGreaterThanOrEqual(0.9);
      expect(f).toBeLessThanOrEqual(0.95);
    }
  });

  test('round trip (convection -> air fryer -> convection) is exact at every TEMP_STEPS value, for every uncapped food/style', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const ovenTemp of TEMP_STEPS) {
          const forward = computeAirFryerSettingFromConvection({ ovenTemp, unit: 'F', ovenMinutes: 20, food, style });
          // A capped forward conversion is lossy by design — not part of the round-trip guarantee.
          if (forward.capped) continue;

          const back = computeConvectionSetting({
            airFryerTemp: forward.outF!,
            unit: 'F',
            airFryerMinutes: forward.outMinutes!,
            food,
            style,
          });
          expect(back.outF).toBe(ovenTemp);
        }
      }
    }
  });

  test('round trip stays within the same 25°F drift bound as computeOvenSetting across 250–475°F', () => {
    const DRIFT_BOUND_F = 25;
    let maxDrift = 0;

    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (let ovenTemp = 250; ovenTemp <= 475; ovenTemp += 1) {
          const forward = computeAirFryerSettingFromConvection({ ovenTemp, unit: 'F', ovenMinutes: 20, food, style });
          if (forward.capped) continue;

          const back = computeConvectionSetting({
            airFryerTemp: forward.outF!,
            unit: 'F',
            airFryerMinutes: forward.outMinutes!,
            food,
            style,
          });
          const drift = Math.abs(back.outF! - ovenTemp);
          maxDrift = Math.max(maxDrift, drift);
          expect(drift).toBeLessThanOrEqual(DRIFT_BOUND_F);
        }
      }
    }

    expect(maxDrift).toBeGreaterThan(0);
  });

  test('reciprocal cross-links to the flagship, both reverse converters, and /chart', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');
    for (const slug of ['/oven-to-air-fryer', '/air-fryer-to-convection', '/air-fryer-to-oven', '/chart']) {
      await expect(page.locator(`.related-link a[href="${slug}"]`)).toHaveCount(1);
    }
  });

  test('flagship and chart link to the now-live /convection-to-air-fryer', async ({ page }) => {
    await page.goto('/oven-to-air-fryer');
    await expect(page.locator('.related-link a[href="/convection-to-air-fryer"]')).toHaveCount(1);

    await page.goto('/chart');
    await expect(page.locator('.related-links a[href="/convection-to-air-fryer"]')).toHaveCount(1);
  });

  test('emits WebApplication + FAQPage JSON-LD with every dictionary FAQ', async ({ page }) => {
    await page.goto('/convection-to-air-fryer');
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    const graph = JSON.parse(raw!)['@graph'] as { '@type': string; mainEntity?: unknown[] }[];
    expect(graph.map((n) => n['@type'])).toEqual(['WebApplication', 'FAQPage']);
    expect(graph[1].mainEntity).toHaveLength(en.convectionTool.faqs.length);
  });
});

test.describe('/air-fryer-to-convection', () => {
  test('renders with zero page errors', async ({ page }) => {
    const pageErrors = await collectPageErrors(page);
    const response = await page.goto('/air-fryer-to-convection');
    expect(response?.status()).toBe(200);
    await expect(page.locator('.tool-header h1')).toHaveText(en.reverseConvectionTool.heading);
    await expect(page.locator('.widget-head')).toContainText(en.reverseConvectionConverter.widgetLabel);
    expect(pageErrors).toEqual([]);
  });

  test('widget result matches computeConvectionSetting for the default inputs', async ({ page }) => {
    await page.goto('/air-fryer-to-convection');

    // Defaults come from ReverseConverterWidget.astro: 375°F / 20 min, general, basket.
    const expected = computeConvectionSetting({ airFryerTemp: 375, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });

    await expect(page.locator('#afo-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afo-out-time')).toHaveText(String(expected.outMinutes));
  });

  test('changing food, temp, time and style tracks computeConvectionSetting', async ({ page }) => {
    await page.goto('/air-fryer-to-convection');

    await page.selectOption('#afo-food', 'fries');
    await page.fill('#afo-temp', '390');
    await page.fill('#afo-time', '18');
    await page.click('#afo-style-oven');

    const expected = computeConvectionSetting({ airFryerTemp: 390, unit: 'F', airFryerMinutes: 18, food: 'fries', style: 'oven' });

    await expect(page.locator('#afo-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afo-out-time')).toHaveText(String(expected.outMinutes));
  });

  test('every FOODS/style combination rounds the convection output to a real 25°F dial step', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const airFryerTemp of TEMP_STEPS) {
          const { outF } = computeConvectionSetting({ airFryerTemp, unit: 'F', airFryerMinutes: 20, food, style });
          expect(outF).not.toBeNull();
          expect(outF! % 25).toBe(0);
        }
      }
    }
  });

  test('no ceiling clamp: an input above the air fryer ceiling is not held down to it', () => {
    for (const style of STYLES) {
      const r = computeConvectionSetting({ airFryerTemp: 475, unit: 'F', airFryerMinutes: 20, food: 'general', style });
      expect(r.outF!).toBeGreaterThan(r.ceiling);
    }
  });

  test('ceilingAmbiguous is true exactly when the air fryer input is at or above the style ceiling', () => {
    for (const food of FOOD_KEYS) {
      for (const style of STYLES) {
        for (const airFryerTemp of TEMP_STEPS) {
          const r = computeConvectionSetting({ airFryerTemp, unit: 'F', airFryerMinutes: 20, food, style });
          expect(r.ceilingAmbiguous).toBe(airFryerTemp >= r.ceiling);
        }
      }
    }
  });

  test('widget surfaces the ambiguous-ceiling note only at or above the style ceiling', async ({ page }) => {
    await page.goto('/air-fryer-to-convection');
    await expect(page.locator('#afo-ambiguous')).toBeHidden();

    await page.fill('#afo-temp', '400');
    const atCeiling = computeConvectionSetting({ airFryerTemp: 400, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });
    await expect(page.locator('#afo-ambiguous')).toBeVisible();
    await expect(page.locator('#afo-ambiguous-text')).toHaveText(
      cappedNote(en.reverseConvectionConverter.ambiguousCeilingNoteTemplate, en.converter.unitBasket, atCeiling),
    );

    await page.fill('#afo-temp', '375');
    await expect(page.locator('#afo-ambiguous')).toBeHidden();
  });

  test('reciprocal cross-links to its sibling, the oven pair, and /chart', async ({ page }) => {
    await page.goto('/air-fryer-to-convection');
    for (const slug of ['/convection-to-air-fryer', '/air-fryer-to-oven', '/oven-to-air-fryer', '/chart']) {
      await expect(page.locator(`.related-link a[href="${slug}"]`)).toHaveCount(1);
    }
  });

  test('reverse and chart pages link to the now-live /air-fryer-to-convection', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');
    await expect(page.locator('.related-link a[href="/air-fryer-to-convection"]')).toHaveCount(1);

    await page.goto('/chart');
    await expect(page.locator('.related-links a[href="/air-fryer-to-convection"]')).toHaveCount(1);
  });

  test('emits WebApplication + FAQPage JSON-LD with every dictionary FAQ', async ({ page }) => {
    await page.goto('/air-fryer-to-convection');
    const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
    const graph = JSON.parse(raw!)['@graph'] as { '@type': string; mainEntity?: unknown[] }[];
    expect(graph.map((n) => n['@type'])).toEqual(['WebApplication', 'FAQPage']);
    expect(graph[1].mainEntity).toHaveLength(en.reverseConvectionTool.faqs.length);
  });
});

test.describe('convection pages: registration and locales', () => {
  const SLUGS = [
    { slug: '/convection-to-air-fryer', tool: 'convectionTool' },
    { slug: '/air-fryer-to-convection', tool: 'reverseConvectionTool' },
  ] as const;

  test('both slugs are in LIVE_PAGES and TRANSLATED_PAGES', () => {
    const translated = new Set(TRANSLATED_PAGES.map((p) => p.slug));
    for (const { slug } of SLUGS) {
      expect(LIVE_PAGES.has(slug)).toBe(true);
      expect(translated.has(slug)).toBe(true);
    }
  });

  test('sitemap lists every locale of both slugs', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const { slug } of SLUGS) {
      for (const l of LOCALES) expect(xml).toContain(`<loc>${localizedUrl(l.code, slug)}</loc>`);
    }
  });

  for (const l of LOCALES) {
    test(`${l.code} homepage renders both convection cards live, with locale-correct hrefs`, async ({ page }) => {
      await page.goto(localizedPath(l.code, '/'));
      for (const { slug } of SLUGS) {
        const card = page.locator(`a.card[href="${localizedPath(l.code, slug)}"]`);
        await expect(card).toHaveCount(1);
        await expect(card).not.toContainText(getDictionary(l.code).home.comingSoon);
      }
    });
  }

  for (const width of [375, 412]) {
    for (const { slug } of SLUGS) {
      test(`${slug} has no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 860 });
        await page.goto(slug);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow).toBeLessThanOrEqual(0);
        for (const box of await page.locator('.widget-card .seg-btn, .widget-card input, .widget-card select').all()) {
          expect((await box.boundingBox())!.height).toBeGreaterThanOrEqual(44);
        }
      });
    }
  }

  for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) {
    for (const { slug, tool } of SLUGS) {
      test(`/${l.code}${slug} renders translated with canonical, hreflang, and zero page errors`, async ({ page }) => {
        const pageErrors = await collectPageErrors(page);
        const dict = getDictionary(l.code);

        const response = await page.goto(localizedPath(l.code, slug));
        expect(response?.status()).toBe(200);
        await expect(page.locator('.tool-header h1')).toHaveText(dict[tool].heading);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(l.code, slug));
        for (const alt of LOCALES) {
          await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', localizedUrl(alt.code, slug));
        }
        // Cross-links stay inside the locale.
        await expect(page.locator(`.related-link a[href="${localizedPath(l.code, '/chart')}"]`)).toHaveCount(1);

        expect(pageErrors).toEqual([]);
      });
    }
  }
});
