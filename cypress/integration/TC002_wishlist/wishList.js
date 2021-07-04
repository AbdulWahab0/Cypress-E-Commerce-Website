Given("the user navigate to home page", () => {
  cy.visit("baseUrl");
});

When("the user selects {string} t shirt", (content) => {
  cy.get('a[title="Women"]').click();
  cy.get(".product-name").contains(content).click();
});

And("the user add to wishlist", () => {
  cy.get("h1").should("contain.text", "Faded Short Sleeve T-shirts");
  cy.get("#wishlist_button").click();
});

Then("the user should get error message", () => {
  cy.get(".fancybox-error").should(
    "contain.text",
    "You must be logged in to manage your wishlist."
  );
  cy.get(".fancybox-item").click();
});
