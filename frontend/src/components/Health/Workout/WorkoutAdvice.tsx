import { useEffect, useState } from "react";

// måste göra om strukturen på databasen :(

interface WorkoutProps {
  id: number;
  low: string;
  medium: string;
  high: string;
}

export default function WorkoutAdvice() {
  const [advice, setAdvice] = useState<WorkoutProps[] | undefined>([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        setAdvice(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      <h1 style={{ padding: "10px", margin: "20px" }}>
        Low intensity workouts
      </h1>
      {advice &&
        advice.map((advices) => (
          <div key={advices.id} style={{ padding: "10px", margin: "20px" }}>
            <p>{advices.low}</p>
          </div>
        ))}
    </div>
  );
}
