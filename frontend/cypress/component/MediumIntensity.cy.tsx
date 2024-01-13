import MediumIntensity from "../../src/components/Health/Workout/Allworkouts/MediumIntensity";

describe("<MediumIntensity />", () => {
  it("Renders medium intensity fetch", () => {
    cy.mount(<MediumIntensity />);
  });

  it("Renders the different states of run", () => {
    cy.mount(<MediumIntensity />);
    cy.get("div").contains("Steady-State Run");
    cy.get("div").contains("Fun and Varied Run");
    cy.get("div").contains("Moderate Pace with Focus on Recovery");
    cy.get("div").contains("Fun and Unconventional");
  });
});
