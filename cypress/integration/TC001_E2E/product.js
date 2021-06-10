Given('User is on product page ', (content) => {
    cy.visit('http://automationpractice.com/index.php')

    cy.get('a[title="Women"]').should('be.visible').click()
  

});