// BDD & TDD

import {When, Given, Before, Then} from "@badeball/cypress-cucumber-preprocessor"
// Scenario: Knappen ska gå att trycka på när inputfälten är ifyllda
Before(() => {
  cy.mount("<HealthForm />");
})

Given("Formuläret är laddat och knappen är inaktiverad", () => {
  cy.get('#mood').should('exist');
  cy.get('#energy').should('exist');
  cy.get('#pain').should('exist');
  cy.get('#period').should('exist');
  cy.get('#flow').should('exist');
  cy.get('#period-pain').should('exist');
  cy.get('button#submit').should("be.disabled")

})

When("Jag fyller i alla inputfälten", function () {
  cy.get('#mood').contains('Happy').click();
    cy.get('#energy').contains('Energetic').click();
    cy.get('#pain').contains('No').click();
    cy.get('#period').contains('No').click();
    cy.get('#flow').contains('No').click();
    cy.get('#period').contains('No').click();
});

Then('Då ska knappen bli aktiv', () => {
  cy.get('button#submit').should("be.enabled")
})

// Scenario: Knappen ska inte gå att trycka på om bara några inputfält alternativ är ifyllda
Given("Formuläret är laddat och knappen är inaktiverad", () => {
  cy.get('#mood').should('exist');
  cy.get('#energy').should('exist');
  cy.get('#pain').should('exist');
  cy.get('#period').should('exist');
  cy.get('#flow').should('exist');
  cy.get('#period-pain').should('exist');
  cy.get('button#submit').should("be.disabled")
})

When("Jag fyller tre av inputfälten", () => {
  cy.get('#mood').contains('Happy').click();
  cy.get('#energy').contains('Energetic').click();
  cy.get('#pain').contains('No').click();
})

Then("Då ska knappen förbli inaktiv", ()=> {
  cy.get('button#submit').should("be.disabled")
})
