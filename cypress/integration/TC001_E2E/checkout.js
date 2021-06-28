Given("the user sets delivery details", (datatable) => {
  datatable.hashes().forEach((element) => {
    if ((element.address = "London")) {
      cy.get(".cart_navigation > .button > span").click();
    } else {
      cy.get("#address_delivery > .address_update > .button > span").click();
      cy.get("#address1").clear().type(element.postCode);
      cy.get("#submitAddress").click();
      cy.get(".cart_navigation > .button > span").click();
    }
  });
});

When("the user make a payment", () => {});

Then("the user should complete order", () => {});
