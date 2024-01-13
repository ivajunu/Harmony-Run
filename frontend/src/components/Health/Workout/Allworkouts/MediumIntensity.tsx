import { useState, useEffect } from "react";
import { StyledAllWorkouts } from "./Allworkouts.styled";

interface WorkoutProps {
  id: number;
  duration: string;
  instruction: string;
  intensity: string;
  type: string;
}

export default function MediumIntensity() {
  const [medium, setMedium] = useState<WorkoutProps[] | undefined>([]);
  useEffect(() => {
    fetch("/medium")
      .then((response) => response.json())
      .then((result: WorkoutProps[]) => {
        setMedium(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      {medium &&
        medium.map((mediums) => (
          <StyledAllWorkouts>
            <p>
              <u>
                <strong>Type of run:</strong>
              </u>{" "}
              {mediums.type}
            </p>
            <p>
              <u>
                <strong>Duration:</strong>
              </u>{" "}
              {mediums.duration}
            </p>
            <p>
              <u>
                <strong>Intensity:</strong>
              </u>{" "}
              {mediums.intensity}
            </p>
            <p>
              <u>
                <strong>Instruction:</strong>
              </u>{" "}
              {mediums.instruction}
            </p>
          </StyledAllWorkouts>
        ))}
    </div>
  );
}
