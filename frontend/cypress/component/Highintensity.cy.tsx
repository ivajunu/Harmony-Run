import HighIntensity from "../../src/components/Health/Workout/Allworkouts/Highintensity";

describe("<HighIntensity />", () => {
  it("renders the highintensity fetch", () => {
    cy.mount(<HighIntensity />);
  });

  it("Renders the type of run to be interval training and varied and energizing", () => {
    cy.mount(<HighIntensity />);
    cy.get("div").contains("Interval Training");
    cy.get("div").contains("Varied and Energizing");
  });
});
