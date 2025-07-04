import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { calculateTimeLeft } from "../utils/calculate-time-left";

export const Timer = () => {
  const { payDate } = Heading();

  const lessThanTenCheck = (timeLeft) =>
    timeLeft < 10 ? "0" + timeLeft : timeLeft;

  const zeroValueCheck = (timeLeft) =>
    timeLeft === 0 ? "00" : lessThanTenCheck(timeLeft);

  // TODO: Refactor this function as it can 100% can be done with a dep like date-fns
  const timerFormatter = () => {
    let seperator = ":";
    // Checks if seconds are equal to 0 and replaces it with double zero
    let secondsZeroCheck = zeroValueCheck(timeLeft.seconds);
    let minuteZeroCheck = zeroValueCheck(timeLeft.minute);
    let hourZeroCheck = zeroValueCheck(timeLeft.hour);
    let dayZeroCheck = zeroValueCheck(timeLeft.day);

    const timer =
      (dayZeroCheck +=
      seperator +=
      hourZeroCheck +=
      seperator +=
      minuteZeroCheck +=
      seperator +=
        secondsZeroCheck);

    return timer.includes("undefined") ? "Payday!" : timer;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(payDate));

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
