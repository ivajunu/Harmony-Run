import { useEffect, useState } from "react";

// måste göra om strukturen på databasen :(

interface WorkoutProps {
  id: number;
  duration: string;
  instruction: string;
  intensity: string;
  type: string;
}

export default function WorkoutAdvice() {
  const [workout, setWorkout] = useState<WorkoutProps[] | undefined>([]);
  const score = localStorage.getItem("backendKey");
  console.log("värde från localstorage:", score);

  useEffect(() => {
    if (score) {
      fetch(`/score?score=${encodeURIComponent(score)}`)
        .then((response) => response.json())
        .then((result: WorkoutProps[]) => {
          setWorkout(result);
          console.log(result);
        });
    }
  }, [score]);

  return (
    <div>
      <div>
        <h1 style={{ padding: "10px", margin: "20px" }}>Workout advice</h1>
        <p>
          This is based on the form. Your score was {score}. Please note that
          yoúr score may not always be accurate to how you are feeling.
        </p>
      </div>
      {workout &&
        workout.map((workouts) => (
          <div key={workouts.id} style={{ padding: "10px", margin: "20px" }}>
            <p>{workouts.duration}</p>
            <p>{workouts.instruction}</p>
            <p>{workouts.intensity}</p>
            <p>{workouts.type}</p>
          </div>
        ))}
    </div>
  );
}
