Feature: Formulär för hälsa.

Det ska vara ett formulär, som från början inte är ifyllt. Varje input ska ha flervalsalternativ. När man väljer ett alternativ ska det visas i input-fältet. Man behöver fylla i alla flervals-input för att formuläret ska vara giltigt och knappen ska gå och trycka på.

Man behöver inte fylla i antecknings sektionen.

Scenario: Man klickar sig in på webbsidan.
  Before Jag är på hemsidan och klickar mig in på sidan där formuläret är.
  When Jag klickar på knappen men inget händer
  Given Jag klickar på flervalsalternativ-inputen och väljer ett av valen
  Then Input fälten ska vara ifyllda och knappen ska gå att trycka på.
