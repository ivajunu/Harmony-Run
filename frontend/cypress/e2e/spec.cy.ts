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

  it("Visits the daily health form, fills in the healthform and gets a workout recommendation", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#basic-button").click();
    cy.get("#basic-menu").contains("Daily Health").click();
    cy.url().should("include", "/daily-health").click;
    cy.get("#basic-menu").click();

    // Fyller i formuläret

    cy.get("input#good-mood").click();
    cy.get("input#energetic").click();
    cy.get("input#no-pain").click();
    cy.get("input#no-period").click();
    cy.get("input#no-flow").click();
    cy.get("input#p-pain-no").click();
    cy.get(".MuiButton-outlined").click();

    // Går till nästa sida och får rekommendation

    cy.get("div").contains("Type of run:");
  });

  it("Visits 'workout for the day' but doesn't get a workout advice", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#basic-button").click();
    cy.get("#basic-menu").contains("Workout for the day").click();
    cy.url().should("include", "/workout-advice").click;
    cy.get("#basic-menu").click();

    cy.get("div").contains("Type of run:").should("not.exist");
    cy.get("div").contains("We could not provide a workout option for you!");
  });

  it("Visits 'workout for the day' but doesn't get a workout advice", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#basic-button").click();
    cy.get("#basic-menu").contains("Workout for the day").click();
    cy.url().should("include", "/workout-advice").click;
    cy.get("#basic-menu").click();

    cy.get("div").contains("Type of run:").should("not.exist");
    cy.get("div").contains("We could not provide a workout option for you!");
  });

  it("Visits 'all workouts' menu option", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#basic-button").click();
    cy.get("#basic-menu").contains("All workouts").click();
    cy.url().should("include", "/all-workouts").click;
    cy.get("#basic-menu").click();
    cy.get("div").contains("Browse all workouts");
  });
});
