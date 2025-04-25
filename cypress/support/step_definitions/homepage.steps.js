// cypress/support/step_definitions/homepage.steps.js
import {
  Given,
  When,
  Then,
  And,
  defineStep,
} from "@badeball/cypress-cucumber-preprocessor";


//const { expect } = require('chai');

Given('I visit the Clippy.io homepage', function () {
  cy.visit('/'); // Use the baseUrl defined in cypress.config.js
});

Then('the page title should include {string}', function (title) {
  cy.title().should('include', title);
});

Then('the main heading {string} should be visible', function (heading) {
  cy.contains(heading).should('be.visible');
});

defineStep('I click on {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
});
