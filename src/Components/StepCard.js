import React from "react";
import "./StepCard.css";

function StepCard({ step, id, endStepTime, startTime, time }) {
  let completion = 0;
  if (time >= endStepTime) {
    completion = 100;
  } else if (time > startTime && time < endStepTime) {
    completion = ((time - startTime) * 100) / step[0];
  }
  console.log(`Step ${id + 1}: ${completion}`);

  const stepCardStyle = {
    backgroundImage: `linear-gradient(to top, var(--gray) ${
      100 - completion
    }%, var(--secondary) ${100 - completion}%)`,
    transition: "background-image 1s linear",
  };

  return (
    <div
      className="step-card"
      style={
        completion >= 100
          ? { backgroundImage: "none", backgroundColor: "var(--secondary)" }
          : stepCardStyle
      }
    >
      <div className="step-text">
        <p className="step-num">
          Step {id + 1}: {step[0]}s
        </p>
        <p>{step[1]}</p>
      </div>
    </div>
  );
}

export default StepCard;
