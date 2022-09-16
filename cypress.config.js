const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  projectId: "kcbsep",
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
    urlBank: 'https://demo.guru99.com',
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js',
    //specPattern: 'cypress/integration/examples/*.feature'
  },

});
