import siteConfig from '../site.config.ts';
import { DEFAULT_LOCALE, type LocaleCode } from './locales';

/** Prefixes a site-relative path (e.g. "/", "/oven-to-air-fryer", "/#convert") with the locale, except for the default locale. */
export function localizedPath(locale: LocaleCode, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

export function localizedUrl(locale: LocaleCode, path: string): string {
  return `${siteConfig.domain}${localizedPath(locale, path)}`;
}
