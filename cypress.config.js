require('dotenv').config()
const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

const qaLiteBaseUrl =
  process.env.QA_LITE_BASE_URL || 'https://qa-lite.vercel.app'

module.exports = defineConfig({
  video: true,
  env: {
    QA_LITE_BASE_URL: qaLiteBaseUrl,
    QA_LITE_AUTH_COOKIE: process.env.QA_LITE_AUTH_COOKIE || '',
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    baseUrl: qaLiteBaseUrl,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber())
    },
  },
})
