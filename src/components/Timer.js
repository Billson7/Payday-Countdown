import React, { useEffect, useState } from "react";
import Heading from "./Heading";

const Timer = () => {
  const { payDate } = Heading();
  const calculateTimeLeft = () => {
    const difference = +new Date(payDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
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
      <span className='bg-black p-3 rounded-lg text-white font-extralight' id="time" key={interval}>
        {timeLeft[interval] < 10 ? "0" + timeLeft[interval] : timeLeft[interval]}
      </span>
    );
  });

  return (
    <div className="timer">
      {timerComponents.length ? timerComponents : <span>Payday!</span>}
    </div>
  );
};
export default Timer;
