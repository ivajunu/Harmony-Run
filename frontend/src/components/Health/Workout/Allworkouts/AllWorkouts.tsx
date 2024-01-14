import { StyledButton, StyledDiv, StyledH2 } from "./Allworkouts.styled";
import HighIntensity from "./Highintensity";
import MediumIntensity from "./MediumIntensity";
import LowIntensity from "./LowIntensity";
import { useState } from "react";
import GeneralTips from "../General/GeneralTips";
import { StyledIntro } from "../../WorkoutAdvice/WorkoutAdvice.styled";

export default function AllWorkouts() {
  const [low, setLow] = useState<boolean>(false);
  const [medium, setMedium] = useState<boolean>(false);
  const [high, setHigh] = useState<boolean>(false);

  return (
    <>
      <StyledIntro>
        <h1 style={{ margin: "5px" }}>Browse all workouts</h1>
      </StyledIntro>
      <StyledDiv>
        <StyledButton
          onClick={() => {
            setHigh(!high);
          }}
        >
          High intensity workouts
        </StyledButton>
        {high && <HighIntensity />}
        <StyledButton
          onClick={() => {
            setMedium(!medium);
          }}
        >
          Medium intensity workouts
        </StyledButton>
        {medium && <MediumIntensity />}
        <StyledButton
          onClick={() => {
            setLow(!low);
          }}
        >
          Low intensity workouts
        </StyledButton>
        {low && <LowIntensity />}
      </StyledDiv>
      <StyledH2>Some general tips, just for you</StyledH2>
      <GeneralTips />
    </>
  );
}
