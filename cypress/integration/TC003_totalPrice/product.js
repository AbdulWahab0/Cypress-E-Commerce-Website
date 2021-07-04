Given("the user selects a {string} tshirt", (content) => {
  cy.get('a[title="Women"]').click();
  cy.get(".block_content > .tree > :nth-child(1) > .grower")
    .should("be.visible")
    .click();
  cy.get(
    ".block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a"
  ).click();
  cy.get(".ajax_block_product").should("contain.text", content);
  cy.get(".available-now").should("contain.text", "In stock");
  cy.get('a[title="View"]').click();
});
When("the user selects quantity {string}", (content) => {
  cy.get("#quantity_wanted")
    .clear()
    .type(content)
    .should("contain.value", content);
});
When("the user selects size {string}", (content) => {
  cy.get("select").select(content).should("contain.text", content);
});
When("the user selects color {string}", (content) => {
  if (content === "blue") {
    cy.get("#color_14").click().should("have.class", "selected");
  } else {
    cy.get("#color_13").click().should("have.class", "selected");
  }
});
Then("the user add to cart", () => {
  cy.get("#add_to_cart").click();
  cy.get("h2")
    .should("contain.text", "Product successfully added to your shopping cart")
    .get('a[title="Proceed to checkout"]')
    .click();
});
