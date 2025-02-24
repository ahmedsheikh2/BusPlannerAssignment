// playwright.config.js
const { devices } = require('@playwright/test');

const config = {
  // Global timeout for each test
  timeout: 30 * 1000, // 30 seconds

  // Global expect timeout
  expect: {
    timeout: 15000, // 5 seconds
  },

  // Number of retries for each test
  retries: 0,

  // Number of workers to run tests in parallel
  workers: process.env.CI ? 1 : 1,

  // Reporter to use
  reporter: [['html', { outputFolder: 'playwright-report' }]],

  // Projects to run tests on different browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],

  // Browser context options
  use: {
    // Base URL for all tests
    baseURL: 'https://www.saucedemo.com',

    // Browser options
    headless: false, // Run in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
};

module.exports = config;