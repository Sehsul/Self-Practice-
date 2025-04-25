describe('Clippy.io Homepage Test', () => {
    it('should load the homepage and check title & content', () => {
      // 1. Visit Clippy.io
      cy.visit('https://www.clippy.io');
  
      // 2. Assert the page title contains 'Clippy'
      cy.title().should('include', 'Clippy');
  
      // 3. Check if "Clippy" or a main heading is visible
      cy.contains('Clippy').should('be.visible');  // Or use another visible element like h1
    });
  });
  