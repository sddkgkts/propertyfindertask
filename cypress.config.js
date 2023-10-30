const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "ymtzie",
  CYPRESS_RECORD_KEY: '61201f6c-b4ef-4d22-826d-3f408a522a00',
  GITHUB_TOKEN: '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',

  watchForFileChanges: false,
  experimentalWebKitSupport: true,
  screenshotOnRunFailure: true,
  screenshotsFolder:'cypress/screenshots',
  
  e2e: {
    baseUrl: "https://www.propertyfinder.bh/",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },


    specPattern: 'cypress/e2e/features/*/*.feature',
    excludeSpecPattern: "**/cypress/pages/*,cypress/integration/step-definition/*",
    failOnStatusCode: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 80000,
    watchForFileChanges: false,
    video: true,
    reporter:'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite:true,
      html: true,
      json: true,
      code: false
    }
  }
});