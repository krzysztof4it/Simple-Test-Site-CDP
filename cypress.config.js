// Documentation: https://docs.cypress.io/guides/references/configuration

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 800,
  viewportWidth:1200,

  e2e: {
    baseUrl: 'https://fabrykatestow.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
