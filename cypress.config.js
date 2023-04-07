const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 800,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  e2e: {
    testIsolation: false,
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
