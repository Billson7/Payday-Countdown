export const HeadingGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let dayState;
  if (currentHour < 12) {
    dayState = "Good Morning";
  } else if (currentHour < 18) {
    dayState = "Good Afternoon";
  } else {
    dayState = "Good Evening";
  }
  return dayState;
};
