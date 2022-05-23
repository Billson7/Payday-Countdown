import { Heading } from "../components/Heading";

export const TimerFormatter = timeLeft => {
    let day = timeLeft.day;
    let hour = timeLeft.hour;
    let minute = timeLeft.minute;
    let seconds = timeLeft.seconds;
    // Checks if seconds is equal ro 0 and replaces it with double zero
    let secondsZeroCheck = seconds !== 0 ? seconds : "00";
    // adds a starting zero if the number drops below 10 so it show 09, 08 etc
    secondsZeroCheck = seconds < 10 ? "0" + seconds : seconds;
  
    let minuteZeroCheck = minute !== 0 ? minute : "00";
    minuteZeroCheck = minute < 10 ? "0" + minute : minute;
  
    let hourZeroCheck = hour !== 0 ? hour : "00";
    hourZeroCheck = hour < 10 ? "0" + hour : hour;
  
    let dayZeroCheck = day !== 0 ? day : "00";
    dayZeroCheck = day < 10 ? "0" + day : day;
  
    let seperator = ":";
    const timer = (dayZeroCheck += seperator += hourZeroCheck += seperator += minuteZeroCheck += seperator += secondsZeroCheck);
  
    return timer.includes("undefined") ? "Payday!" : timer;
  };
  
  export const CalculateTimeLeft = () => {
    const { payDate } = Heading();
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