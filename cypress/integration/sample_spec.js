describe("Google MoMo", () => {
  it("will click link to momo website", () => {
    cy.visit("https://www.google.com");
    cy.get(".gLFyf").type("momo paradise{enter}");
  });
});
