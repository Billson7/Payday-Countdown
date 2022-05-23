import React, { useEffect, useState } from "react";
import { TimerFormatter, CalculateTimeLeft } from '../utils/timer-utils'

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft(timeLeft));
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(CalculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="hidden" id="time" key={interval}>
        {timeLeft[interval] < 10
          ? "0" + timeLeft[interval]
          : timeLeft[interval]}
      </span>
    );
  });

  return (
    <div className="timer" data-testid="timer">
      <span className="bg-black dark:bg-white p-3 rounded-lg text-white dark:text-black font-extralight">
        {TimerFormatter()}
      </span>
    </div>
  );
};
