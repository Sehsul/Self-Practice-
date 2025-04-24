describe('Cypress.io Navigation Test', () => {
    it('should open Commands dropdown and select Files', () => {
      cy.visit('https://www.cypress.io'); // ✅ Cypress main site
  
      // Wait for menu to load and click "Docs"
      cy.contains('Docs').click();
  
      // Click the dropdown menu for "API"
      cy.contains('API').click();
  
      // Now click "Files" inside API section
      cy.contains('Files').click();
  
      // Assert the URL contains 'files'
      cy.url().should('include', 'files');
    });
  });
  