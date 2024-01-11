Feature: Formulär för hälsa.

Det ska vara ett formulär, som från början inte är ifyllt. Varje input ska ha flervalsalternativ. När man väljer ett alternativ ska det visas i input-fältet. Man behöver fylla i alla flervals-input för att formuläret ska vara giltigt och knappen ska gå och trycka på.


Scenario: Knappen ska gå att trycka på när inputfälten är ifyllda
 Given Formuläret är laddat och knappen är inaktiverad
 When Jag fyller i alla inputfälten
 Then Då ska knappen bli aktiv

Scenario: Knappen ska inte gå att trycka på om bara några inputfält alternativ är ifyllda
 Given Formuläret är laddat och knappen är inaktiverad
 When Jag fyller tre av inputfälten
 Then Då ska knappen förbli inaktiv
