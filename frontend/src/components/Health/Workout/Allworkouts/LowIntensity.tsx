import { useState, useEffect } from "react";
import { StyledAllWorkouts } from "./Allworkouts.styled";

interface WorkoutProps {
  id: number;
  duration: string;
  instruction: string;
  intensity: string;
  type: string;
}

export default function LowIntensity() {
  const [low, setLow] = useState<WorkoutProps[] | undefined>([]);
  useEffect(() => {
    fetch("/low")
      .then((response) => response.json())
      .then((result: WorkoutProps[]) => {
        setLow(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      {low &&
        low.map((lows) => (
          <StyledAllWorkouts>
            <p>
              <u>
                <strong>Type of run:</strong>
              </u>{" "}
              {lows.type}
            </p>
            <p>
              <u>
                <strong>Duration:</strong>
              </u>{" "}
              {lows.duration}
            </p>
            <p>
              <u>
                <strong>Intensity:</strong>
              </u>{" "}
              {lows.intensity}
            </p>
            <p>
              <u>
                <strong>Instruction:</strong>
              </u>{" "}
              {lows.instruction}
            </p>
          </StyledAllWorkouts>
        ))}
    </div>
  );
}
