import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";

export const Timer = () => {
  const { payDate } = Heading();

  // probs refactor to a utils file - same as timerFormatter
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

  // TODO: Refactor this function as it can 100% can be done with a dep like date-fns
  const timerFormatter = () => {
    let day = timeLeft.day;
    let hour = timeLeft.hour;
    let minute = timeLeft.minute;
    let seconds = timeLeft.seconds;
    let seperator = ":";
    // Checks if seconds are equal to 0 and replaces it with double zero
    let secondsZeroCheck = seconds !== 0 ? seconds : "00";
    let minuteZeroCheck = minute !== 0 ? minute : "00";
    let hourZeroCheck = hour !== 0 ? hour : "00";
    let dayZeroCheck = day !== 0 ? day : "00";
    
    // adds a starting zero if the number drops below 10, so it shows 09, 08 etc
    secondsZeroCheck = seconds < 10 ? "0" + seconds : seconds;

    minuteZeroCheck = minute < 10 ? "0" + minute : minute;

    hourZeroCheck = hour < 10 ? "0" + hour : hour;

    dayZeroCheck = day < 10 ? "0" + day : day;

    const timer = (dayZeroCheck += seperator += hourZeroCheck += seperator += minuteZeroCheck += seperator += secondsZeroCheck);

    return timer.includes("undefined") ? "Payday!" : timer;
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
        {timerFormatter()}
      </span>
    </div>
  );
};
