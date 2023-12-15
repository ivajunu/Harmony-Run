import {HealthForm} from "./../../src/components/Health/HealthForm"

// TDD test
describe("HealthForm", () => {
  it("Mounts the HealthForm and shows 5 input fields and button that should be disabled", () => {
    cy.mount(<HealthForm />);

    cy.get('#mood').should('exist');
    cy.get('#energy').should('exist');
    cy.get('#pain').should('exist');
    cy.get('#period').should('exist');
    cy.get('#flow').should('exist');
    cy.get('#period-pain').should('exist');

    cy.get('button#submit').should("be.disabled")
  })
  it("Selects a value in the 5 inputfields and the button is enabled", () => {
    cy.mount(<HealthForm />);

    cy.get('#mood-radio-group').contains('Happy').click();
    cy.get('#energy-radio-group').contains('Energetic').click();
    cy.get('#pain-radio-group').contains('No').click();
    cy.get('#period-radio-group').contains('No').click();
    cy.get('#flow-radio-group').contains('No').click();
    cy.get('#period-pain-radio-group').contains('No').click();

    cy.get('button#submit').should("be.enabled")
  })

  it("Doesn't enable the button before all the inputs are selected", ()=> {
    cy.mount(<HealthForm />);

    cy.get('#mood-radio-group').contains('Happy').click();
    cy.get('#energy-radio-group').contains('Energetic').click();
    cy.get('#pain-radio-group').contains('No').click();

    cy.get('button#submit').should("be.disabled")
  })
})
