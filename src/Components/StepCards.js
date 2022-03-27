import React from "react";
import StepCard from "./StepCard";
import { minToSec } from "../utils/minToSec";

function StepCards({ steps, totalTime, time }) {
  let endStepTime = 0;

  const sumAndReturn = (step, idx) => {
    let startTime = endStepTime;
    endStepTime += step[0];

    return (
      <>
        <StepCard
          step={step}
          id={idx}
          endStepTime={endStepTime}
          startTime={startTime}
          time={time}
        />
        <p
          className="step-time"
          style={
            time >= endStepTime
              ? { color: "var(--secondary)" }
              : { color: "var(--dark)" }
          }
        >
          {endStepTime < totalTime ? minToSec(endStepTime.toString()) : ""}
        </p>
      </>
    );
  };

  return <div className="steps-container">{steps.map(sumAndReturn)}</div>;
}

export default StepCards;
