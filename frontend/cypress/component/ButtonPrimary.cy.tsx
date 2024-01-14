import ButtonPrimary from "../../src/components/Buttons/Button";

describe("<ButtonPrimary />", () => {
  it("Renders the button", () => {
    cy.mount(<ButtonPrimary buttonLabel="Test" />);
    cy.contains("Test").should("exist");
  });

  it("Changes the button label to Cypress", () => {
    cy.mount(<ButtonPrimary buttonLabel="Cypress" />);
  });

  it("onClick works on the button", () => {
    const onClick = cy.stub().as("onClick");
    cy.mount(<ButtonPrimary buttonLabel="Cypress" onClick={onClick} />);
    cy.contains("Cypress").click();
    cy.get("@onClick").should("be.calledOnce");
  });

  it("Is disabled when passing disabled prop", () => {
    cy.mount(<ButtonPrimary buttonLabel="Cypress" disabled={true} />);
    cy.get("button").should("be.disabled");
  });

  it("Is not disabled when disabled prop is false", () => {
    cy.mount(<ButtonPrimary buttonLabel="Cypress" disabled={false} />);
    cy.get("button").should("not.be.disabled");
  });
});
