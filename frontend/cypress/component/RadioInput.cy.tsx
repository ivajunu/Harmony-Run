import RadioInput from "../../src/components/Inputs/RadioInput/RadioInput";
import RadioChoice from "../../src/components/Inputs/RadioInput/RadioChoice";

describe("<RadioInput />", () => {
  it("Renders the radioInput component", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Test Input"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
  });

  it("Sets the arialabel to test", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Test Input"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
    cy.get('[aria-labelledby="Test"]').should("exist");
  });

  it("Sets the id to test", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Test Input"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
    cy.get("[id=test]").should("exist");
  });

  it("Sets the form label to Radio choice", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Radio choice"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
    cy.get("label").contains("Radio choice");
  });

  it("Gets the radiobutton choice test1 and test2", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Radio choice"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
    cy.get("label").contains("Test1");
    cy.get("label").contains("Test2");
  });

  it("Changes the class when clicked on the radio choices", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Radio choice"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test1" value={"test2"} />
      </RadioInput>
    );
    cy.contains("Test1").click();
    cy.get(".Mui-checked").should("exist");
    cy.contains("Test2").click();
    cy.get(".Mui-checked").should("exist");
  });

  it("Both radio options cannot be clicked at the same time", () => {
    cy.mount(
      <RadioInput
        ariaLabel="Test"
        formId="test"
        formLabel="Radio choice"
        radioGroupName="test"
      >
        <RadioChoice choiceLabel="Test1" radioId="test1" value={"test1"} />
        <RadioChoice choiceLabel="Test2" radioId="test2" value={"test2"} />
      </RadioInput>
    );

    cy.contains("Test1").click();
    cy.get('[value="test1"]').should("be.checked");
    cy.contains("Test2").click();
    cy.get('[value="test1"]').should("not.be.checked");
    cy.get('[value="test2"]').should("be.checked");
  });
});
