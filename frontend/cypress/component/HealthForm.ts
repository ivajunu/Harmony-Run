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
  cy.get('#mood-radio-group').contains('Happy').click();
    cy.get('#energy-radio-group').contains('Energetic').click();
    cy.get('#pain-radio-group').contains('No').click();
    cy.get('#period-radio-group').contains('No').click();
    cy.get('#flow-radio-group').contains('No').click();
    cy.get('#period-pain-radio-group').contains('No').click();
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
  cy.get('#mood-radio-group').contains('Happy').click();
  cy.get('#energy-radio-group').contains('Energetic').click();
  cy.get('#pain-radio-group').contains('No').click();
})

Then("Då ska knappen förbli inaktiv", ()=> {
  cy.get('button#submit').should("be.disabled")
})
