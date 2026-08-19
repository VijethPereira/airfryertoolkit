import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://airfryertoolkit.com',
  output: 'server',
  adapter: cloudflare({ session: false }),
  vite: {
    plugins: [tailwindcss()],
  },
});
