Given("User is on product page", (content) => {
  cy.get('a[title="Women"]').should("be.visible").click();
  cy.get(".block_content > .tree > :nth-child(1) > .grower")
    .should("be.visible")
    .click();
  cy.get(
    ".block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a"
  ).click();
  cy.get(".product_img_link > .replace-2x").click();
});
When("the user selects quantity {string}", (content) => {
  cy.get("#quantity_wanted")
    .clear()
    .type(content)
    .should("contain.value", content);
});
And("the user selects size {string}", (content) => {
  cy.get("select").select(content).should("contain.text", content);
});
And("the user selects color {string}", (content) => {
  if (content == "blue") {
    cy.get("#color_13").click().should("have.class", "selected");
  } else {
    cy.get("#color_14").click().should("have.class", "selected");
  }
  And("the user add to cart", () => {
    cy.get("#add_to_cart").click();
    cy.get(".layer_cart_product").should("be.visible");
    cy.get(".layer_cart_product > h2").should(
      "contain.text",
      "Product successfully added to your shopping cart"
    );
    cy.get(".layer_cart_cart").should("be.visible");
    cy.get(".button-medium > span").click();
  });

  Then("the user should see selected item {string}", (content) => {
    cy.get(".cart_description").should("contain.text", content);
    cy.get(".cart_navigation > .button > span", { timeout: 30000 }).click();

    cy.url().should("include", "?controller=order&step=1");
  });
});
