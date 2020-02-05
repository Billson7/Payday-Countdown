import React, { useEffect, useState } from "react";
import Title from "./components/heading";
import "./App.css";
import Confetti from "react-dom-confetti";

const App = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-02-28") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    console.log(timeLeft);
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];
  console.log(timerComponents);
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span id="time" key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
    console.log();
  });

  const config = {
    angle: "360",
    spread: "360",
    startVelocity: "100",
    elementCount: "200",
    dragFriction: "0.11",
    duration: "10000",
    stagger: "20",
    width: "20px",
    height: "15px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div className="page-section">
      <div className="countdown-page">
        <h1 id="header">
          <Title /> Payday Countdown
        </h1>
        <div className="timer">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>
              <Confetti active={true} config={config} />
              Payday!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
