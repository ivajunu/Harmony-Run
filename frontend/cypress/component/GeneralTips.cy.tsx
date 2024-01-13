import GeneralTips from "../../src/components/Health/Workout/General/GeneralTips";

describe("<GeneralTips />", () => {
  it("Mounts the Generaltips", () => {
    cy.mount(<GeneralTips />);
  });

  it("Renders all general tips", () => {
    cy.mount(<GeneralTips />);
    cy.get("div").contains(
      "Listen to Your Body: Pay attention to how your body feels during the run. If you need to take it easy or push a bit harder, adjust accordingly."
    );
    cy.get("div").contains(
      "Stay Hydrated: Hydration is important, especially during your period. Drink water before, during, and after your run."
    );
    cy.get("div").contains(
      "Stretching: Include dynamic stretching before your run and static stretching afterward to help prevent injury and improve flexibility."
    );
    cy.get("div").contains(
      "Rest and Recovery: Allow yourself proper rest days. Your body needs time to recover, especially during your period or when feeling fatigued."
    );
    cy.get("div").contains(
      "Remember, these are general guidelines, and its crucial to adapt workouts based on individual fitness levels and health considerations. If you have any specific health concerns or conditions, its always a good idea to consult with a healthcare professional or a fitness expert."
    );
  });
});
