import { useEffect, useState } from "react";

interface WorkoutProps {
  id: number;
  duration: string;
  instruction: string;
  intensity: string;
  type: string;
}

export default function AllWorkouts() {
  const [workout, setWorkout] = useState<WorkoutProps[] | undefined>([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result: WorkoutProps[]) => {
        setWorkout(result);
        console.log(result);
      });
  }, []);
  return (
    <div>
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
