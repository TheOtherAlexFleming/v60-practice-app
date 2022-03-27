import React from "react";
import "./MethodCard.css";
import { minToSec } from "../../utils/minToSec";

function MethodCard({
  id,
  methodIdx,
  setMethodIdx,
  title,
  coffeeWeight,
  waterWeight,
  brewTime,
  img,
}) {
  return (
    <div
      className={
        methodIdx === id ? "method-card method-primary" : "method-card"
      }
    >
      <div className="method-static">
        <div className="method-info">
          <p className="method-title">{title}</p>
          <div className="method-stats">
            <p className="method-info">coffee weight: {coffeeWeight}g</p>
            <p className="method-info">water weight: {waterWeight}g</p>
            <p className="method-info">brew time: {minToSec(brewTime)}s</p>
          </div>
        </div>
        <div className="method-img-container">
          <img src={img} alt={title} />
        </div>
      </div>
      <button className="btn-primary" onClick={() => setMethodIdx(id)}>
        select
      </button>
    </div>
  );
}

export default MethodCard;
