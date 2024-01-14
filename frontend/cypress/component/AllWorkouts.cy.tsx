import AllWorkouts from "../../src/components/Health/Workout/Allworkouts/AllWorkouts";

describe("<AllWorkouts />", () => {
  it("Renders the allworkouts component", () => {
    cy.mount(<AllWorkouts />);
    cy.get("h1").contains("Browse all workouts");
  });

  it("Renders all the workout headlines", () => {
    cy.mount(<AllWorkouts />);
    cy.get("button").contains("High intensity workouts");
    cy.get("button").contains("Medium intensity workouts");
    cy.get("button").contains("Low intensity workouts");
  });

  it("When clicking on the workout headlines the workouts show upp for high intensity, sorted by type of run", () => {
    cy.mount(<AllWorkouts />);
    cy.get("button").contains("High intensity workouts").click();
    cy.get("div").contains("Interval Training");
    cy.get("div").contains("Varied and Energizing");
    cy.get("div").contains("Distance Challenge");
  });

  it("When clicking on the workout headlines the workouts show upp for medium intensity, sorted by type of run", () => {
    cy.mount(<AllWorkouts />);
    cy.get("button").contains("Medium intensity workouts").click();
    cy.get("div").contains("Steady-State Run");
    cy.get("div").contains("Moderate Pace with Focus on Recovery");
    cy.get("div").contains("Fun and Unconventional");
  });

  it("When clicking on the workout headlines the workouts show upp for low intensity, sorted by type of instruction", () => {
    cy.mount(<AllWorkouts />);
    cy.get("button").contains("Low intensity workouts").click();
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

  it("Shows information the workouts when clicking the headline, and hides the information when clicking again", () => {
    cy.mount(<AllWorkouts />);
    cy.get("button").contains("High intensity workouts").click();
    cy.get("div").contains("Interval Training");
    cy.get("button").contains("High intensity workouts").click();
    cy.get("div").contains("Interval Training").should("not.exist");

    cy.get("button").contains("Medium intensity workouts").click();
    cy.get("div").contains("Steady-State Run");
    cy.get("button").contains("Medium intensity workouts").click();
    cy.get("div").contains("Steady-State Run").should("not.exist");

    cy.get("button").contains("Low intensity workouts").click();
    cy.get("div").contains(
      "Low-Intensity Jog: Maintain a pace where you can comfortably hold a conversation. Power Walk: Focus on brisk walking to promote blood flow without exerting too much energy. Interval Walking: Alternate between a casual stroll and a slightly brisk pace."
    );
    cy.get("button").contains("Low intensity workouts").click();
    cy.get("div")
      .contains(
        "Low-Intensity Jog: Maintain a pace where you can comfortably hold a conversation. Power Walk: Focus on brisk walking to promote blood flow without exerting too much energy. Interval Walking: Alternate between a casual stroll and a slightly brisk pace."
      )
      .should("not.exist");
  });
});
