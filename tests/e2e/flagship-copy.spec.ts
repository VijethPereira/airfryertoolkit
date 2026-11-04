import { test, expect } from '@playwright/test';
import { FAQ_INPUTS, FASTEST_FOOD, SLOWEST_FOOD, flagshipCopy, flagshipValues } from '../../src/lib/flagship-copy';
import { COST_PATH, whichSavingRange } from '../../src/lib/cost';
import { FOODS, STYLE_CEILING_F, computeAirFryerSetting } from '../../src/lib/converter';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';

const digits = (s: string) => s.match(/\d+/g) ?? [];
/** The preheat FAQ keeps its 3 / 4 minutes until row 15 sources them. */
const PREHEAT_Q: Record<string, RegExp> = { en: /preheat/i, es: /precalent/i, pt: /pré-aquec/i, fr: /préchauff/i, de: /vorheiz/i };
/** The flat rule other calculators apply, quoted with its numbers (and its 450°F → 425°F example). */
const FLAT_RULE_NUMBERS = ['25', '20', '450', '425'];

test.describe('flagship copy (Dictionary.tool)', () => {
  for (const { code } of LOCALES) {
    test(`${code}: fills, and types no engine or energy number`, () => {
      const t = getDictionary(code).tool;
      expect(() => flagshipCopy(code)).not.toThrow();
      expect(digits(t.multipliersBody), 'multipliersBody').toEqual([]);
      expect(digits(t.basketVsOvenBody), 'basketVsOvenBody').toEqual([]);
      for (const field of ['aboutBody', 'whatHappensBody'] as const) {
        for (const d of digits(t[field])) expect(FLAT_RULE_NUMBERS, `${field}: ${d}`).toContain(d);
      }
      for (const f of t.faqs) {
        if (PREHEAT_Q[code].test(f.q) && !/\{/.test(f.a)) continue;
        // An answer may repeat the numbers its question asks about; every other number is a placeholder.
        const asked = new Set(digits(f.q));
        for (const d of digits(f.a)) expect(asked.has(d), `${f.q} → ${d}`).toBe(true);
      }
    });
  }

  test('the values come from the engine and the Which? data', () => {
    const v = flagshipValues('en');
    expect(FOODS[FASTEST_FOOD].f).toBe(Math.min(...Object.values(FOODS).map((p) => p.f)));
    expect(FOODS[SLOWEST_FOOD].f).toBe(Math.max(...Object.values(FOODS).map((p) => p.f)));
    expect(v.CEIL_BASKET).toBe(String(STYLE_CEILING_F.basket));
    const c200 = computeAirFryerSetting({ ovenTemp: 200, ovenMinutes: 15, unit: 'C', food: 'general', style: 'basket' });
    expect([v.C200_AF, v.C200_MIN]).toEqual([String(c200.outC), String(c200.outMinutes)]);
    const s = whichSavingRange();
    expect([v.WHICH_SAVE_MIN, v.WHICH_SAVE_MAX]).toEqual([String(Math.round(s.min * 100)), String(Math.round(s.max * 100))]);
    // The flat-rule example only makes sense while its 425°F result is above the basket ceiling.
    expect(425).toBeGreaterThan(STYLE_CEILING_F.basket);
  });

  test('worked-number FAQs: the question asks about the inputs the answer is computed from', () => {
    for (const { code } of LOCALES) {
      const faqs = getDictionary(code).tool.faqs;
      const byKey = (key: string) => faqs.find((f) => f.a.includes(`{${key}}`))!;
      expect(byKey('T30_LO').q, code).toContain(String(FAQ_INPUTS.thirtyMinutes));
      expect(byKey('T20_LO').q, code).toContain(String(FAQ_INPUTS.twentyMinutes));
      expect(byKey('C200_MIN').q, code).toContain(`${FAQ_INPUTS.celsius.ovenTemp}°C`);
      expect(byKey('C200_MIN').q, code).toContain(String(FAQ_INPUTS.celsius.ovenMinutes));
    }
  });

  test('the energy FAQ links to the cost page in every locale', async ({ page }) => {
    for (const { code } of LOCALES) {
      const faq = flagshipCopy(code).faqs.find((f) => f.link);
      expect(faq, code).toBeTruthy();
      expect(faq!.link!.href, code).toBe(localizedPath(code, COST_PATH));
      await page.goto(localizedPath(code, '/oven-to-air-fryer'));
      const item = page.locator('.faq-item', { hasText: faq!.q });
      await item.locator('summary').click();
      await expect(item.locator(`.faq-link a[href="${localizedPath(code, COST_PATH)}"]`), code).toBeVisible();
      await expect(page.locator('main'), code).not.toContainText(/\{[A-Z_0-9]+\}/);
    }
  });
});
