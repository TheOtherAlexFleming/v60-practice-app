import "./App.css";
import MethodCard from "./MethodCard/MethodCard";
import { useState, useEffect } from "react";
import { minToSec } from "../utils/minToSec";
import StepCards from "./StepCards";
import coffee from "../Assets/coffee.svg";

const brews = require("../Assets/brews");

function App() {
  const [methodIdx, setMethodIdx] = useState(0);
  const [time, setTime] = useState(brews[0].brewTime);
  const [totalTime, setTotalTime] = useState(brews[0].brewTime);
  const [isActive, setIsActive] = useState(false);

  const changeMethod = (id) => {
    setMethodIdx(id);
    setTime(brews[id].brewTime);
    setTotalTime(brews[id].brewTime);
    stopTimer();
  };

  useEffect(() => {
    let timeyboi = null;
    if (time > 0 && isActive) {
      timeyboi = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timeyboi);
    };
  }, [time, isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div className="background">
        <main>
          <h1 className="title">v60 timer</h1>
          <div className="methods">
            <h3 className="subtitle">
              brewing method: <span>{brews[methodIdx].title}</span>
            </h3>
            <div className="method-cards-container">
              {brews.map((brew, idx) => {
                return (
                  <MethodCard
                    id={idx}
                    methodIdx={methodIdx}
                    {...brew}
                    setMethodIdx={changeMethod}
                  />
                );
              })}
            </div>
          </div>
          <div className="timer-container">
            <h2 className="timer">{time > 0 ? minToSec(time) : "Complete!"}</h2>
            <div className="btn-container">
              <button className="btn-primary" onClick={() => startTimer()}>
                Start
              </button>
              <button className="btn-secondary" onClick={() => stopTimer()}>
                Stop
              </button>
            </div>
          </div>
          <div className="instructions">
            <StepCards
              steps={brews[methodIdx].steps}
              methodIdx={methodIdx}
              totalTime={totalTime}
              time={totalTime - time}
            />
            {/* <div className="steps-container">
              {brews[methodIdx].steps.map((step, idx) => (
                <StepCard id={idx} />
              ))}
              <StepCard />
            </div> */}
            <div className="coffee-img-container">
              {/* <img
                src="https://cdn.shopify.com/s/files/1/0269/7625/6064/products/V60-Ceramic-Dripper_image_1_1000x1000.jpg?v=1625097087"
                alt="v60 dripper"
                className="coffee-img"
              /> */}
              <img src={coffee} className="coffee-svg" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
