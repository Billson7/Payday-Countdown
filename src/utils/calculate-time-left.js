export const calculateTimeLeft = (payDate) => {
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
