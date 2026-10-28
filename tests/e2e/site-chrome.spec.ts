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

// Shared <details> FAQ (src/components/Faq.astro): one page per body that uses it.
const FAQ_PAGES = [
  '/oven-to-air-fryer', '/air-fryer-to-oven', '/convection-to-air-fryer', '/air-fryer-to-convection',
  '/frozen', '/350-to-air-fryer', '/air-fryer/salmon', '/chart', '/cosori', '/model-max-temp',
];

test.describe('FAQ without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  for (const path of FAQ_PAGES) {
    test(`${path}: answers are closed and open on click with JS disabled`, async ({ page }) => {
      await page.goto(path);
      const items = page.locator('.faq-list details.faq-item');
      const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
      const faqCount = ld.flatMap((j) => [JSON.parse(j)].flat().flatMap((b) => b['@graph'] ?? [b]))
        .filter((b) => b['@type'] === 'FAQPage').reduce((n, b) => n + b.mainEntity.length, 0);
      expect(faqCount).toBeGreaterThan(0);
      await expect(items).toHaveCount(faqCount);
      const first = items.first();
      await expect(first.locator('.faq-a')).toBeHidden();
      await first.locator('summary').click();
      await expect(first).toHaveAttribute('open', '');
      await expect(first.locator('.faq-a')).toBeVisible();
    });
  }
});

test('FAQ answers print expanded', async ({ page }) => {
  await page.goto('/air-fryer/salmon');
  const answers = page.locator('.faq-list .faq-a');
  await expect(answers.first()).toBeHidden();
  await page.emulateMedia({ media: 'print' });
  for (const a of await answers.all()) await expect(a).toBeVisible();
});

test('no page ships the old FAQ toggle script or <dd hidden> markup', async ({ page }) => {
  for (const path of FAQ_PAGES) {
    await page.goto(path);
    await expect(page.locator('.faq-toggle, dd.faq-a')).toHaveCount(0);
  }
});
