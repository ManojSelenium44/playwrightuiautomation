// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({


  reporter: [
    ['json', { outputFile: 'test-results/playwright-report.json' }],
    ['html', { outputFolder: 'test-results/playwright-report', open: 'never' }]
  ],
  // other configuration options
});
