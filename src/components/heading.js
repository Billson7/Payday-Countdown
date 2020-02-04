import React from "react";

const Title = () => {
  const today = new Date();
  const currentMonth = String(today.getMonth() + 1).padStart(2, "0");
  console.log(currentMonth);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const d = new Date();
  const month = months[d.getMonth()];

  return month;
};
export default Title;
