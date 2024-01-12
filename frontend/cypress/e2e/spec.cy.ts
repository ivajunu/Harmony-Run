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
    cy.get("div").contains("Harmony Run");
    cy.get("div").contains("Log your daily mood and symptoms:");
    cy.get("div").contains("Daily recommendations:");
    cy.get("div").contains("Focus on women's health:");
  });
});
