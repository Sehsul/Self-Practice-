// Example of custom commands or global hooks
Cypress.Commands.add('visitHomepage', () => {
    cy.visit('https://www.clippy.io');
  });
  