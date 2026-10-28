import { test, expect } from '@playwright/test';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';

// Nav and footer: the plain <a> links crawlers follow from every page.

for (const { code } of LOCALES) {
  test(`nav and footer link the localized /presets and /frozen (${code})`, async ({ page }) => {
    const dict = getDictionary(code);
    await page.goto(localizedPath(code, '/'));
    await expect(page.locator('.nav-links a', { hasText: dict.nav.foodPresets })).toHaveAttribute('href', localizedPath(code, '/presets'));
    const footer = page.locator('.footer-links');
    await expect(footer.getByRole('link', { name: dict.footer.foodPresets, exact: true })).toHaveAttribute('href', localizedPath(code, '/presets'));
    await expect(footer.getByRole('link', { name: dict.footer.frozen, exact: true })).toHaveAttribute('href', localizedPath(code, '/frozen'));
    await expect(page.locator('a[href*="#presets"]')).toHaveCount(0);
  });
}

for (const width of [641, 720, 800, 900, 1024]) {
  test(`no horizontal scroll from the nav at ${width}px in the longest locale (de)`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/de');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
