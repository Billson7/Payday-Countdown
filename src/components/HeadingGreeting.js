export const HeadingGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let dayState;
  if (currentHour < 12) {
    dayState = "Good morning";
  } else if (currentHour < 18) {
    dayState = "Good afternoon";
  } else {
    dayState = "Good evening";
  }
  return dayState;
};
