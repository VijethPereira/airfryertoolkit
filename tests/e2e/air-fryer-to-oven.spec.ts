import { test, expect } from '@playwright/test';
import { computeAirFryerSetting, computeOvenSetting, FOODS, type FoodKey, type FryerStyle } from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { LIVE_PAGES } from '../../src/site.config';

test.describe('/air-fryer-to-oven', () => {
  test('renders with zero page errors', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (err) => pageErrors.push(err));

    const response = await page.goto('/air-fryer-to-oven');
    expect(response?.status()).toBe(200);

    await expect(page.locator('.tool-header h1')).toHaveText('Air Fryer to Oven Converter');

    expect(pageErrors).toEqual([]);
  });

  test('widget result matches computeOvenSetting output for the default inputs', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');

    // Defaults: general food, basket style, 375°F / 20 min (see ReverseConverterWidget.astro).
    const expected = computeOvenSetting({
      airFryerTemp: 375,
      unit: 'F',
      airFryerMinutes: 20,
      food: 'general',
      style: 'basket',
    });

    await expect(page.locator('#afo-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afo-out-time')).toHaveText(String(expected.outMinutes));
  });

  test('changing food type and style updates the result to match computeOvenSetting, not inline arithmetic', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');

    await page.selectOption('#afo-food', 'fries');
    await page.fill('#afo-temp', '400');
    await page.fill('#afo-time', '12');
    await page.click('#afo-style-oven');

    const expected = computeOvenSetting({
      airFryerTemp: 400,
      unit: 'F',
      airFryerMinutes: 12,
      food: 'fries',
      style: 'oven',
    });

    await expect(page.locator('#afo-out-main')).toHaveText(`${expected.outF}°F`);
    await expect(page.locator('#afo-out-time')).toHaveText(String(expected.outMinutes));
  });

  test('step note discloses the 25°F oven-dial rounding', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');
    await expect(page.locator('.result-meta')).toContainText('25°F');
  });

  test('no ceiling-clamp language visible at default (below-ceiling) inputs — ovens have no ceiling in this direction', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');
    const bodyText = await page.locator('main').innerText();
    expect(bodyText.toLowerCase()).not.toContain('ceiling');
    expect(bodyText.toLowerCase()).not.toContain('clamp');
  });

  test('ceilingAmbiguous flags an air fryer input at or above the style ceiling, not below it', () => {
    const belowBasket = computeOvenSetting({ airFryerTemp: 375, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });
    expect(belowBasket.ceilingAmbiguous).toBe(false);

    const atBasket = computeOvenSetting({ airFryerTemp: 400, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });
    expect(atBasket.ceilingAmbiguous).toBe(true);

    const aboveBasket = computeOvenSetting({ airFryerTemp: 425, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });
    expect(aboveBasket.ceilingAmbiguous).toBe(true);

    const belowOvenStyle = computeOvenSetting({ airFryerTemp: 425, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'oven' });
    expect(belowOvenStyle.ceilingAmbiguous).toBe(false);

    const atOvenStyle = computeOvenSetting({ airFryerTemp: 450, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'oven' });
    expect(atOvenStyle.ceilingAmbiguous).toBe(true);
  });

  test('widget surfaces the ambiguous-ceiling note only once the air fryer input reaches the style ceiling', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');

    // Default is 375°F / basket, below the 400°F ceiling — note must be hidden.
    await expect(page.locator('#afo-ambiguous')).toBeHidden();

    // At the basket ceiling: the note appears and names the ~8% forward capped-time bonus.
    await page.fill('#afo-temp', '400');
    await expect(page.locator('#afo-ambiguous')).toBeVisible();
    await expect(page.locator('#afo-ambiguous')).toContainText('8%');

    // Back below the ceiling: hidden again.
    await page.fill('#afo-temp', '375');
    await expect(page.locator('#afo-ambiguous')).toBeHidden();
  });

  test('every FOODS/style combination rounds the oven output to a real 25°F dial step', () => {
    for (const food of Object.keys(FOODS) as FoodKey[]) {
      for (const style of ['basket', 'oven'] as FryerStyle[]) {
        for (const airFryerTemp of TEMP_STEPS) {
          const { outF } = computeOvenSetting({ airFryerTemp, unit: 'F', airFryerMinutes: 20, food, style });
          expect(outF).not.toBeNull();
          expect(outF! % 25).toBe(0);
        }
      }
    }
  });

  test('no ceiling clamp: a high air fryer temperature just adds the offset back, uncapped', () => {
    // 475°F is above both the 400°F basket and 450°F oven-style forward ceiling, but
    // the reverse direction has no ceiling — it must not be held down to either one.
    const basket = computeOvenSetting({ airFryerTemp: 475, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'basket' });
    const ovenStyle = computeOvenSetting({ airFryerTemp: 475, unit: 'F', airFryerMinutes: 20, food: 'general', style: 'oven' });
    expect(basket.outF).toBeGreaterThan(475);
    expect(ovenStyle.outF).toBeGreaterThan(475);
  });

  test('round trip (oven -> air fryer -> oven) is exact at every TEMP_STEPS value, for every uncapped food/style', () => {
    for (const food of Object.keys(FOODS) as FoodKey[]) {
      for (const style of ['basket', 'oven'] as FryerStyle[]) {
        for (const ovenTemp of TEMP_STEPS) {
          const forward = computeAirFryerSetting({ ovenTemp, unit: 'F', ovenMinutes: 20, food, style });
          // A capped forward conversion is lossy by design (see /chart) — not part of the round-trip guarantee.
          if (forward.capped) continue;

          const back = computeOvenSetting({
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

  test('round trip stays within a 25°F drift bound across the full 250-475°F range for non-25-aligned temperatures', () => {
    const DRIFT_BOUND_F = 25;
    let maxDrift = 0;

    for (const food of Object.keys(FOODS) as FoodKey[]) {
      for (const style of ['basket', 'oven'] as FryerStyle[]) {
        for (let ovenTemp = 250; ovenTemp <= 475; ovenTemp += 1) {
          const forward = computeAirFryerSetting({ ovenTemp, unit: 'F', ovenMinutes: 20, food, style });
          if (forward.capped) continue;

          const back = computeOvenSetting({
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

    // Sanity check the bound isn't vacuous — real drift should show up somewhere off the 25°F grid.
    expect(maxDrift).toBeGreaterThan(0);
  });

  test('reciprocal cross-links to /oven-to-air-fryer and /chart', async ({ page }) => {
    await page.goto('/air-fryer-to-oven');
    await expect(page.locator('.related-link a[href="/oven-to-air-fryer"]')).toHaveCount(1);
    await expect(page.locator('.related-link a[href="/chart"]')).toHaveCount(1);
  });

  test('flagship and chart pages link back to the now-live /air-fryer-to-oven', async ({ page }) => {
    await page.goto('/oven-to-air-fryer');
    await expect(page.locator('.related-link a[href="/air-fryer-to-oven"]')).toHaveCount(1);

    await page.goto('/chart');
    await expect(page.locator('.related-links a[href="/air-fryer-to-oven"]')).toHaveCount(1);
  });

  test('homepage renders a live card linking to /air-fryer-to-oven, no Coming soon badge', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('a.card[href="/air-fryer-to-oven"]');
    await expect(card).toHaveCount(1);
    await expect(card).not.toContainText('Coming soon');
  });

  test('/air-fryer-to-oven is registered in LIVE_PAGES', () => {
    expect(LIVE_PAGES.has('/air-fryer-to-oven')).toBe(true);
  });

  for (const [locale, heading] of [
    ['es', 'Conversor de freidora de aire a horno'],
    ['pt', 'Conversor de air fryer para forno'],
    ['fr', 'Convertisseur friteuse à air vers four'],
    ['de', 'Heißluftfritteuse-zu-Ofen-Umrechner'],
  ] as const) {
    test(`/${locale}/air-fryer-to-oven renders translated with zero page errors`, async ({ page }) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      const response = await page.goto(`/${locale}/air-fryer-to-oven`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('.tool-header h1')).toHaveText(heading);

      expect(pageErrors).toEqual([]);
    });
  }
});
