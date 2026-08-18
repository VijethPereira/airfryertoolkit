const siteConfig = {
  siteName: 'Air Fryer Toolkit',
  domain: 'https://airfryertoolkit.com',
  tagline:
    'Free, no sign-up oven-to-air-fryer conversion, adjusted for food type and basket vs. oven-style — not a flat 25° rule.',
  primaryColor: '#ee884f',
  gaId: '', // Google Analytics 4 Measurement ID, e.g. 'G-XXXXXXXXXX' — fill in later
  adsenseId: '', // AdSense publisher ID, e.g. 'ca-pub-XXXXXXXXXXXXXXXX' — fill in later
  navLinks: [
    { label: 'Convert', href: '/#convert' },
    { label: 'Reverse', href: '/#reverse' },
    { label: 'Food presets', href: '/#presets' },
    { label: 'Brands', href: '/#brands' },
    { label: 'Chart', href: '/#chart' },
    { label: 'Guide', href: '/#guide' },
  ],
  tools: [
    {
      name: 'Oven → Air Fryer',
      href: '/oven-to-air-fryer',
      description:
        'Enter the oven temperature and time. Get the air fryer setting, adjusted for food type and basket vs. oven-style.',
      badge: 'Free',
    },
  ],
  sisterSites: [
    { label: 'Quick Measure', href: 'https://quickmeasuretool.com' },
    { label: 'Snap Image Tools', href: 'https://snapimagetools.com' },
  ],
} as const;

export default siteConfig;
