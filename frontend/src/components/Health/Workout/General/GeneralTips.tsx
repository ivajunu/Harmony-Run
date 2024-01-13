import { useState, useEffect } from "react";
import { Tips } from "../../../Types";
import { StyledGeneral } from "../../WorkoutAdvice/WorkoutAdvice.styled";

export default function GeneralTips() {
  const [tip, setTips] = useState<Tips[] | undefined>([]);
  useEffect(() => {
    fetch("/tips")
      .then((response) => response.json())
      .then((result: Tips[]) => {
        setTips(result);
        console.log(result);
      });
  }, []);
  return (
    <>
      {tip &&
        tip.map((tips) => (
          <div key={tips.id} id="general">
            <StyledGeneral>{tips.tips}</StyledGeneral>
          </div>
        ))}
    </>
  );
}
