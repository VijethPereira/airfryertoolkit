import { defineConfig } from '@playwright/test';

// URL hygiene checks against the built site under wrangler dev (Cloudflare asset handling +
// public/_redirects). `npm run test:urls` builds first; dist/ must be current.
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: 'urls.spec.ts',
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:8788',
  },
  webServer: {
    command: 'npx wrangler dev --port 8788 --ip 127.0.0.1',
    url: 'http://127.0.0.1:8788/robots.txt',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
