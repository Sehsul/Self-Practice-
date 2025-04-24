const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  projectId: '9i5z95',
  e2e: {
    experimentalStudio: true, // Enable Cypress Studio
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
