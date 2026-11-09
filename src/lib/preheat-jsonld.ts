/** /preheat JSON-LD (WebApplication + FAQPage; the Layout adds BreadcrumbList). Server only: reads the dictionaries. */
import siteConfig from '../site.config';
import { getDictionary } from '../i18n/dictionaries';
import type { LocaleCode } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';
import { PREHEAT_PATH } from './preheat';
import { preheatValues } from './preheat-page';
import { fillPlaceholders } from './temp-landings';

export function preheatJsonLd(locale: LocaleCode) {
  const c = getDictionary(locale).preheat;
  const v = preheatValues();
  const url = localizedUrl(locale, PREHEAT_PATH);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}#app`,
        name: `${c.heading} — ${siteConfig.siteName}`,
        description: c.metaDescription,
        url,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: fillPlaceholders(q, v),
          acceptedAnswer: { '@type': 'Answer', text: fillPlaceholders(a, v) },
        })),
      },
    ],
  };
}
