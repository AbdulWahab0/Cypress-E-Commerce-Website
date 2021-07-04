const loginPage = require("../../pageObject/loginPage.json");

beforeEach(function () {
  Cypress.Cookies.preserveOnce(
    "PrestaShop-a30a9934ef476d11b6cc3c983616e364",
    "ULNdmEiRxDW3HYmJFiBJMhlP2n%2BbH%2BGcBy%2FIE%2Bw6cVJjOHpG5wERqlr4ZokysI7Hx7GSzN4ln4KNUHXlNcvLp4kHKDCnsOXeY%2F1CtPKQssc9jGnwQMtsb8cuVyyGhVNtqpNotYoUOOKkFPeV3iVh%2FIUZBTcYrzTWQ70LQLuLZVXcuPVzl28xuNZWXx7g1NZx2GutLOjQmyFBCfpra6tpklzhdDXvObIlUTX6oSxc%2BhRf9Qn8UevlBM2qlmk1APlNWt4%2BjaeZyhaESKFfu0OYaCDgAGetPR0bmgs%2BIadiOpr5XniVdO1Efi6rywyPZ3GCBhuWTMns%2ByPhGXKg04%2FOLFq5YJxMm8rWxMhyXTk%2FeCIIwHXHxWZD0aXq4gJBPdCFuBFex%2By%2FOaub4kw2%2BHupGGzb%2FFdowGkPvgzit76ZcRJyLY6x34%2B9ROk0Uzexgu72vr0YzrukCv%2B8qTwqH9n8JA%3D%3D000341"
  );
  cy.visit("http://automationpractice.com/index.php");
});

Given("the user open login page", () => {
  //cy.clearCookies();

  cy.get(".login").click();
});

When("the user type in", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get(loginPage.username).should("be.visible").type(element.username);
    cy.get(loginPage.password).should("be.visible").type(element.password);
  });
});

When("the user clicks on Sign in button", () => {
  cy.get(loginPage.logInButton)
    .should("be.visible")
    .contains("Sign in")
    .click();
});

Then("{string} should be shown", (content) => {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
