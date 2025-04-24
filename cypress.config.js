const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const path = require("path");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: '9i5z95',
  e2e: {
    experimentalStudio: true,
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/index.js",
    fixturesFolder: "cypress/fixtures",
    baseUrl: 'https://www.clippy.io',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, {
        ...config,
        stepDefinitions: path.join(__dirname, "cypress/support/step_definitions") // ✅ Correct location
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    }
  }
});
