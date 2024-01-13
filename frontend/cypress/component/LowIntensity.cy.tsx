import LowIntensity from "../../src/components/Health/Workout/Allworkouts/LowIntensity";

describe("<LowIntensity />", () => {
  it("Renders low intensity fetch", () => {
    cy.mount(<LowIntensity />);
  });
  it("Contains the fetched data from lowintensity", () => {
    cy.mount(<LowIntensity />);
    cy.get("div").contains(
      "Focus: Listen to your body and choose a comfortable pace. Walking or a light jog can help with muscle soreness and fatigue"
    );
    cy.get("div").contains(
      "Low-Intensity Jog: Maintain a pace where you can comfortably hold a conversation. Power Walk: Focus on brisk walking to promote blood flow without exerting too much energy. Interval Walking: Alternate between a casual stroll and a slightly brisk pace."
    );
    cy.get("div").contains(
      "Yoga Run Fusion: Combine gentle jogging with short yoga intervals for added flexibility and relaxation. Nature Trail Walk: Opt for a nature trail walk to enjoy the calming effects of the outdoors. Breathing Exercise Run: Practice deep breathing exercises during your jog to alleviate stress. "
    );
  });
});
