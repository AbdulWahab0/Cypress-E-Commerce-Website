Given("the user sets delivery details", (datatable) => {
  cy.visit("http://automationpractice.com/index.php?controller=order&step=1");
  cy.get(".cart_navigation > .button > span").click();
  //cy.get('.fancybox-error')
  cy.get('.checker [type="checkbox"]')
    .not("[disabled]")
    .check()
    .should("be.checked");
  cy.get(".cart_navigation > .button > span").click();
});
When("the user make a payment", () => {
  cy.get(".bankwire").should("be.visible");
  cy.get(".cheque").should("be.visible");
  cy.get(".bankwire").should("be.visible").click();
  cy.get(".box").should("be.visible");
  cy.get("#cart_navigation > .button > span").click();
});
Then("the user should complete order", () => {});
