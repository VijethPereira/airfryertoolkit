/** WebApplication + Dataset + FAQPage JSON-LD for /model-max-temp in any locale (BreadcrumbList comes from Layout). */
import siteConfig from '../site.config';
import { MODELS } from '../data/models';
import type { LocaleCode } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';
import { getBrandsDictionary } from '../i18n/dictionaries/brands';
import { MODEL_MAX_TEMP_PATH, modelMaxTempValues } from './brands';
import { fillPlaceholders } from './temp-landings';

export function modelMaxTempJsonLd(locale: LocaleCode): Record<string, unknown> {
  const mt = getBrandsDictionary(locale).maxTemp;
  const values = modelMaxTempValues();
  const fill = (text: string) => fillPlaceholders(text, values);
  const url = localizedUrl(locale, MODEL_MAX_TEMP_PATH);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}#app`,
        name: `${mt.heading} — ${siteConfig.siteName}`,
        description: fill(mt.metaDescription),
        url,
        inLanguage: locale,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'Dataset',
        '@id': `${url}#dataset`,
        name: mt.datasetName,
        description: fill(mt.metaDescription),
        url,
        inLanguage: locale,
        creator: { '@type': 'Organization', name: siteConfig.siteName, url: siteConfig.domain },
        license: `${siteConfig.domain}/terms`,
        isAccessibleForFree: true,
        variableMeasured: mt.datasetVariables,
        citation: [...new Set(MODELS.map((m) => m.source))],
        dateModified: MODELS.map((m) => m.sourced).sort().at(-1),
      },
      {
        '@type': 'FAQPage',
        mainEntity: mt.faqs.map(({ q, a }) => ({ '@type': 'Question', name: fill(q), acceptedAnswer: { '@type': 'Answer', text: fill(a) } })),
      },
    ],
  };
}
