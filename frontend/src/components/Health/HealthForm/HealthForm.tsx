import { useEffect, useState } from "react";
import RadioChoice from "../../Inputs/RadioInput/RadioChoice";
import RadioInput from "../../Inputs/RadioInput/RadioInput";
import ButtonPrimary from "../../Buttons/Button";
import { Styledh1, StyledButtonDiv } from "./HealthForm.styled.tsx";

export default function HealthForm() {
  const [mood, setMood] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const [pain, setPain] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [flow, setFlow] = useState<string>("");
  const [periodPain, setPeriodPain] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (
      mood !== "" &&
      energy !== "" &&
      pain !== "" &&
      period !== "" &&
      flow !== "" &&
      periodPain !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [energy, flow, mood, pain, period, periodPain]);

  function handlesubmit() {
    // valde att ha kvar värdena som strings för att inte formulären skulle få problem
    const moodValue = Number(mood);
    console.log(moodValue);
    const energyValue = Number(energy);
    console.log(energyValue);

    const painValue = Number(pain);
    console.log(painValue);

    const periodValue = Number(period);
    console.log(periodValue);

    const flowValue = Number(flow);
    console.log(flowValue);

    const periodPainValue = Number(periodPain);
    console.log(periodPainValue);

    const dailyResult = Math.round(
      (moodValue +
        energyValue +
        painValue +
        periodValue +
        flowValue +
        periodPainValue) /
        6
    );
    console.log("resultat", dailyResult);
  }

  return (
    <>
      <Styledh1>How are you feeling today?</Styledh1>
      <RadioInput
        ariaLabel="mood"
        defaultValue="mood"
        formId="mood"
        formLabel="How are you?"
        radioGroupName="mood"
        onChange={(e) => {
          setMood(e.target.value);
        }}
        value={mood}
      >
        <RadioChoice choiceLabel="Happy & Motivated" radioId="mood" value="5" />
        <RadioChoice choiceLabel="Good" radioId="mood" value="4" />
        <RadioChoice choiceLabel="So-so" radioId="mood" value="3" />
        <RadioChoice choiceLabel="Unmotivated" radioId="mood" value="2" />
        <RadioChoice choiceLabel="Bad" radioId="mood" value="1" />
      </RadioInput>

      <RadioInput
        ariaLabel="energy"
        formId="energy"
        formLabel="What is your energy level?"
        radioGroupName="energy"
        onChange={(e) => {
          setEnergy(e.target.value);
        }}
        value={energy}
      >
        <RadioChoice choiceLabel="Energetic" radioId="energy" value="5" />
        <RadioChoice choiceLabel="Good" radioId="energy" value="4" />
        <RadioChoice choiceLabel="A bit tired" radioId="energy" value="2" />
        <RadioChoice choiceLabel="Very tired" radioId="energy" value="0" />
      </RadioInput>

      <RadioInput
        ariaLabel="pain"
        formId="pain"
        formLabel="Do you have any pain in your body?"
        radioGroupName="pain"
        onChange={(e) => {
          setPain(e.target.value);
        }}
        value={pain}
      >
        <RadioChoice choiceLabel="Yes" radioId="pain" value="0" />
        <RadioChoice choiceLabel="No" radioId="pain" value="5" />
      </RadioInput>

      <RadioInput
        ariaLabel="period"
        formId="period"
        formLabel="Are you on your period?"
        radioGroupName="period"
        onChange={(e) => {
          setPeriod(e.target.value);
        }}
        value={period}
      >
        <RadioChoice choiceLabel="Yes" radioId="period" value="3" />
        <RadioChoice choiceLabel="No" radioId="period" value="5" />
      </RadioInput>

      <RadioInput
        ariaLabel="flow"
        formId="flow"
        formLabel="Discharge/Flow?"
        radioGroupName="flow"
        onChange={(e) => {
          setFlow(e.target.value);
        }}
        value={flow}
      >
        <RadioChoice choiceLabel="No" radioId="flow" value="5" />
        <RadioChoice choiceLabel="Some discharge" radioId="flow" value="4" />
        <RadioChoice
          choiceLabel="A lot of discharge"
          radioId="flow"
          value="3"
        />
        <RadioChoice choiceLabel="Period=Light flow" radioId="flow" value="2" />
        <RadioChoice
          choiceLabel="Period=Regular flow"
          radioId="flow"
          value="1"
        />
        <RadioChoice choiceLabel="Period=Heavy flow" radioId="flow" value="0" />
      </RadioInput>

      <RadioInput
        ariaLabel="period-pain"
        formId="period-pain"
        formLabel="Do you have any period pain?"
        radioGroupName="period-pain"
        onChange={(e) => {
          setPeriodPain(e.target.value);
        }}
        value={periodPain}
      >
        <RadioChoice choiceLabel="Yes a lot" radioId="period-pain" value="0" />
        <RadioChoice
          choiceLabel="Yes a little bit"
          radioId="period-pain"
          value="1"
        />
        <RadioChoice
          choiceLabel="Just a little"
          radioId="period-pain"
          value="3"
        />
        <RadioChoice choiceLabel="Not really" radioId="period-pain" value="4" />
        <RadioChoice choiceLabel="No" radioId="period-pain" value="5" />
      </RadioInput>
      <StyledButtonDiv>
        <ButtonPrimary
          buttonLabel="Send"
          onClick={handlesubmit}
          variant="outlined"
          disabled={disabled}
          id="submit"
        />
      </StyledButtonDiv>
    </>
  );
}
