/** WebApplication + FAQPage JSON-LD for a brand page in any locale (BreadcrumbList comes from Layout). */
import siteConfig from '../site.config';
import type { BrandKey } from '../data/models';
import type { LocaleCode } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';
import { getBrandsDictionary } from '../i18n/dictionaries/brands';
import { brandConfig, fillBrand } from './brands';

export function brandJsonLd(brand: BrandKey, locale: LocaleCode): Record<string, unknown> {
  const copy = getBrandsDictionary(locale).pages[brand]!;
  const fill = (text: string) => fillBrand(brand, text);
  const url = localizedUrl(locale, brandConfig(brand).path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}#app`,
        name: `${copy.heading} — ${siteConfig.siteName}`,
        description: fill(copy.metaDescription),
        url,
        inLanguage: locale,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: copy.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: fill(q),
          acceptedAnswer: { '@type': 'Answer', text: fill(a) },
        })),
      },
    ],
  };
}
