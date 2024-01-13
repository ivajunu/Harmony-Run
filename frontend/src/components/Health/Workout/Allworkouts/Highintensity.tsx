import { useState, useEffect } from "react";
import { StyledAllWorkouts } from "./Allworkouts.styled";
import { WorkoutProps } from "../../../Types";

export default function HighIntensity() {
  const [high, setHigh] = useState<WorkoutProps[] | undefined>([]);
  useEffect(() => {
    fetch("/high")
      .then((response) => response.json())
      .then((result: WorkoutProps[]) => {
        setHigh(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      {high &&
        high.map((highs) => (
          <StyledAllWorkouts>
            <p>
              <u>
                <strong>Type of run:</strong>
              </u>{" "}
              {highs.type}
            </p>
            <p>
              <u>
                <strong>Duration:</strong>
              </u>{" "}
              {highs.duration}
            </p>
            <p>
              <u>
                <strong>Intensity:</strong>
              </u>{" "}
              {highs.intensity}
            </p>
            <p>
              <u>
                <strong>Instruction:</strong>
              </u>{" "}
              {highs.instruction}
            </p>
          </StyledAllWorkouts>
        ))}
    </div>
  );
}
