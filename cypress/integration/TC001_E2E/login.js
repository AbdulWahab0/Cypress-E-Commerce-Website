const loginPage = require('../../pageObject/loginPage.json')
beforeEach(function () {

   // Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364', 'Aa%2BAUgx%2BGGBvRpiQNVQOTFERpSzT5%2BLnnrf%2Bkj72vAokyV86Wu%2BYEaLlmOvLRFCZC8WARepkOaQHZsA%2BNbrltQ%2FXGHzETSsdG51FkY%2BiYG27fj8trmU2aFtiioWfLHlG1GMD1RJQ6%2FaAXx9%2Bl6%2FYccTCvpFdBjADGLujq%2F1YrrXQYH3vIRsACunG%2Bie5dpSTkzzrDpf8cJ7xt7t5yYsGLvaWrji2SPxCQ7HS2SzF7I7OnN2aGn%2F5Xl7DQorLyyS1WXma8ZGzPZybYOPjazRVNCGlZpKsWYXQJkCn3fpVu3exSSDPm4Bb4EVWORYA0az2BJjddyWtM82ib9Uxo0bk7QAJUx6T7Nwfr8yuDrMsaI3VhcyRDgSEiLkLo8jlod5ZQCGC9SZXyQy%2BV2xnxs8ESmwQrZI4Vk%2Fziml%2BT%2BGACK1IYSBs%2BERGfPQ14SMfHoldl3X90CSxGUgwjMxIc5n0a0sSPKQ%2BDTURqWtkKLVANmQ%3D000357')
   cy.visit('http://automationpractice.com/index.php');
})

Given('the user open login page', () => {
    //cy.clearCookies()
   
    cy.get('.login').click();
});

When('the user type in', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(loginPage.username).should('be.visible').type(element.username)
        cy.get(loginPage.password).should('be.visible').type(element.password)
    })
})

When('the user clicks on Sign in button', () => {
    cy.get(loginPage.logInButton).should('be.visible').contains('Sign in').click()
});

Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});