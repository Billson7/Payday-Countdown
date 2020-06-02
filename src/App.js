import React, { useEffect, useState } from "react";
import "./App.css";
import heading from "./components/heading";
import HeadingGreeting from "./components/heading-greeting";

const App = () => {
  const { month, payDate } = heading();
  const calculateTimeLeft = () => {
    const difference = +new Date(payDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span id="time" key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="page-section">
      <div className="countdown-page">
        <h1 id="header">{HeadingGreeting()}, this is a countdown to your</h1>
        <h1 id="header">{month} Payday!</h1>
        <div className="timer">
          {timerComponents.length ? timerComponents : <span>Payday!</span>}
        </div>
      </div>
    </div>
  );
};
export default App;
