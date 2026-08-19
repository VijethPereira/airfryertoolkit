import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://airfryertoolkit.com',
  output: 'server',
  adapter: cloudflare({ session: false }),
  i18n: {
    locales: ['en', 'es', 'pt', 'fr', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
