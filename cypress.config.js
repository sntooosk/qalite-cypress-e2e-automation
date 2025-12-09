const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  video: true,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    baseUrl: 'https://qa-lite.vercel.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber())
    },
  },
})
