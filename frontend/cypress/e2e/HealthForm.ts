// BDD & TDD

import {
  When,
  Given,
  Before,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Knappen ska gå att trycka på när inputfälten är ifyllda
Before(() => {
  cy.visit("http://localhost:3001/");
  cy.get("#basic-button").click();
  cy.get("#basic-menu").contains("Daily Health").click();
  cy.url().should("include", "/daily-health").click;
  cy.get("#basic-menu").click();
});

Given("Formuläret är laddat och knappen är inaktiverad", () => {
  cy.get("#mood").should("exist");
  cy.get("#energy").should("exist");
  cy.get("#pain").should("exist");
  cy.get("#period").should("exist");
  cy.get("#flow").should("exist");
  cy.get("#period-pain").should("exist");
  cy.get("button").should("be.disabled");
});

When("Jag fyller i alla inputfälten", function () {
  cy.get("input#good-mood").click();
  cy.get("input#energetic").click();
  cy.get("input#no-pain").click();
  cy.get("input#no-period").click();
  cy.get("input#no-flow").click();
  cy.get("input#p-pain-no").click();
});

Then("Då ska knappen bli aktiv", () => {
  cy.get("button").should("be.enabled");
});

// Scenario: Knappen ska inte gå att trycka på om bara några inputfält alternativ är ifyllda

When("Jag fyller tre av inputfälten", () => {
  cy.get("input#good-mood").click();
  cy.get("input#energetic").click();
  cy.get("input#no-pain").click();
});

Then("Då ska knappen förbli inaktiv", () => {
  cy.get("button").should("be.disabled");
});
