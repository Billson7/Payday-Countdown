import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { HeadingGreeting } from "./components/HeadingGreeting";
import { Timer } from "./components/Timer";
import { getPayDateChecker } from "./utils/get-pay-date-checker";
import { format } from "date-fns";

const App = () => {
  const { month, payDate } = Heading();
  const formattedDate = format(new Date(payDate), "EEEE dd MMM").toUpperCase();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <div className="container bg-white dark:bg-gray-900 pt-40 md:pt-0">
        <div className="countdown-page">
          <h1 className=" text-gray-300 dark:text-gray-500 ">
            {formattedDate}
          </h1>
          <Timer />
          <h1 className="mt-6 text-black dark:text-white" id="header">
            {HeadingGreeting()}, this is {getPayDateChecker(payDate)} your{" "}
            {month} Payday! 💰
          </h1>
        </div>
      </div>
    </div>
  );
};
export default App;
