import { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledDiv,
  StyledIntro,
} from "./WorkoutAdvice.styled";

interface WorkoutProps {
  id: number;
  duration: string;
  instruction: string;
  intensity: string;
  type: string;
}

export default function WorkoutAdvice() {
  const [randomAdvice, setRandomAdvice] = useState<WorkoutProps>();
  const score = localStorage.getItem("backendKey");
  console.log("värde från localstorage:", score);

  useEffect(() => {
    if (score) {
      fetch(`/score?score=${encodeURIComponent(score)}`)
        .then((response) => response.json())
        .then((result: WorkoutProps[]) => {
          console.log(result);
          RandomizeTip(result);
        });
    }
  }, [score]);

  function RandomizeTip(scores: WorkoutProps[]) {
    if (scores && scores.length > 0) {
      for (let n = 0; n < scores.length; n++) {
        const randomi = Math.floor(Math.random() * scores.length);
        const randomTip = scores[randomi];
        setRandomAdvice(randomTip);
        console.log("randomadvice", randomAdvice);
      }
    }
  }

  return (
    <StyledContainer>
      <StyledIntro>
        <h1 style={{ padding: "10px", margin: "20px" }}>Workout advice</h1>
        <p>
          This is based on the form. Your score was {score}. Please note that
          yoúr score may not always be accurate to how you are feeling.
        </p>
      </StyledIntro>
      {randomAdvice && (
        <StyledDiv>
          <p>
            <u>
              <strong>Type of run:</strong>
            </u>{" "}
            {randomAdvice.type}
          </p>
          <p>
            <u>
              <strong>Duration:</strong>
            </u>{" "}
            {randomAdvice.duration}
          </p>
          <p>
            <u>
              <strong>Intensity:</strong>
            </u>{" "}
            {randomAdvice.intensity}
          </p>
          <p>
            <u>
              <strong>Instruction:</strong>
            </u>{" "}
            {randomAdvice.instruction}
          </p>
        </StyledDiv>
      )}
    </StyledContainer>
  );
}
