describe("st.foo", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays a reversed text", () => {
    cy.get("[data-testid='stFoo']").should("contain", "olleH");
  });
});
