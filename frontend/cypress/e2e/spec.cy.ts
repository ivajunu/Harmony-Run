describe("Harmony Run", () => {
  it("Visits Harmony run", () => {
    cy.visit("http://localhost:3001/");
  });

  it("Has a headline that is also a link", () => {
    cy.visit("http://localhost:3001/");
    cy.get("h1").contains("Harmony Run");
    cy.get("a").contains("Harmony Run");
  });

  it("Has multiple textboxes with h2 headlines", () => {
    cy.visit("http://localhost:3001/");
    cy.get("h2").contains("Harmony Run");
    cy.get("h2").contains("Log your daily mood and symptoms:");
    cy.get("h2").contains("Daily recommendations:");
    cy.get("h2").contains("Focus on women's health:");
  });
});
