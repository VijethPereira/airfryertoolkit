import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  // urls.spec.ts and crawl.spec.ts need the built site under wrangler dev: npm run test:urls
  testIgnore: ['urls.spec.ts', 'crawl.spec.ts'],
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    // Every page loads gtag, AdSense and Google Fonts; one slow third-party response held page.goto's
    // "load" past the 30s timeout (flaky /philips failure, 2026-10-28). Resolve only localhost so
    // third-party requests fail at once and the suite never depends on the network.
    launchOptions: { args: ['--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1'] },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
