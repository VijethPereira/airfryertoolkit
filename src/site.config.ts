const siteConfig = {
  siteName: 'Air Fryer Toolkit',
  domain: 'https://airfryertoolkit.com',
  tagline:
    'Free, no sign-up oven-to-air-fryer conversion, adjusted for food type and basket vs. oven-style — not a flat 25° rule.',
  primaryColor: '#ee884f',
  gaId: 'G-6Q4VTZQ021',
  adsenseId: 'ca-pub-9882918126611424',
  navLinks: [
    { key: 'convert', href: '/#convert' },
    { key: 'reverse', href: '/#reverse' },
    { key: 'foodPresets', href: '/#presets' },
    { key: 'brands', href: '/#brands' },
    { key: 'chart', href: '/chart' },
    { key: 'guide', href: '/#guide' },
  ],
  tools: [
    {
      name: 'Oven → Air Fryer',
      href: '/oven-to-air-fryer',
      description:
        'Enter the oven temperature and time. Get the air fryer setting, adjusted for food type and basket vs. oven-style.',
      badge: 'Free',
    },
    {
      name: 'Conversion Chart',
      href: '/chart',
      description:
        'Printable oven-to-air-fryer temperature, time, and food-multiplier tables — one page, no email, no popup.',
      badge: 'Free',
    },
  ],
  sisterSites: [
    {
      label: 'Quick Measure Tool',
      href: 'https://quickmeasuretool.com',
      title: 'Quick Measure Tool — free online unit and measurement converter',
    },
    {
      label: 'Snap Image Tools',
      href: 'https://snapimagetools.com',
      title: 'Snap Image Tools — free online image editing, resize, and compression',
    },
  ],
} as const;

export default siteConfig;

/**
 * Single source of truth for which internal pages exist and won't 404.
 * Every internal link-gating check (homepage cards, cross-links, etc.)
 * must read from this set — never hand-roll a second list. When a page
 * ships, adding its slug here is the only change needed to re-enable
 * every link that already points at it.
 */
export const LIVE_PAGES = new Set<string>([
  '/',
  '/oven-to-air-fryer',
  '/air-fryer-to-oven',
  '/chart',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
]);
