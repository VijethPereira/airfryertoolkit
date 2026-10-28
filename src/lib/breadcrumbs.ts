/**
 * BreadcrumbList JSON-LD for every translated page below the homepage, derived from its slug:
 * preset → Home › Presets › Food, temperature page → Home › Chart › 350°F, tool → Home › Tool.
 * Names come from each page's own dictionary heading, URLs are absolute apex URLs.
 */
import { getDictionary } from '../i18n/dictionaries';
import type { LocaleCode } from '../i18n/locales';
import { localizedUrl } from '../i18n/utils';
import { PRESETS } from '../data/presets';
import { PRESETS_INDEX_PATH, presetCard, presetPath } from './presets';
import { TEMP_LANDINGS, tempLandingSlug } from './temp-landings';

type Crumb = { name: string; path: string };

export function breadcrumbTrail(locale: LocaleCode, slug: string): Crumb[] | null {
  const dict = getDictionary(locale);
  const home: Crumb = { name: dict.nav.home, path: '/' };
  const presetsIndex: Crumb = { name: dict.presetsIndex.heading, path: PRESETS_INDEX_PATH };
  const chart: Crumb = { name: dict.chart.heading, path: '/chart' };
  const tools: Record<string, string> = {
    '/oven-to-air-fryer': dict.tool.heading,
    '/air-fryer-to-oven': dict.reverseTool.heading,
    '/convection-to-air-fryer': dict.convectionTool.heading,
    '/air-fryer-to-convection': dict.reverseConvectionTool.heading,
    '/frozen': dict.frozenTool.heading,
    '/chart': dict.chart.heading,
  };

  if (slug === '/') return null;
  if (slug === PRESETS_INDEX_PATH) return [home, presetsIndex];
  if (slug in tools) return [home, { name: tools[slug], path: slug }];
  const preset = PRESETS.find((p) => presetPath(p.slug) === slug);
  if (preset) return [home, presetsIndex, { name: presetCard(preset, locale).label, path: slug }];
  const landing = TEMP_LANDINGS.find((l) => tempLandingSlug(l.tempF) === slug);
  if (landing) return [home, chart, { name: `${landing.tempF}°F`, path: slug }];
  throw new Error(`breadcrumbs: no trail for ${slug}`);
}

export function breadcrumbJsonLd(locale: LocaleCode, slug: string): Record<string, unknown> | null {
  const trail = breadcrumbTrail(locale, slug);
  if (!trail) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: localizedUrl(locale, c.path) })),
  };
}
