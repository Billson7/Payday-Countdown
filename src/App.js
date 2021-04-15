import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import HeadingGreeting from "./components/HeadingGreeting";
import Timer from "./components/Timer";
const App = () => {
  const { month, payDate } = Heading();

  return (
    <body className="min-h-screen bg-white dark:bg-gray-900 ">
      <div className="container bg-white dark:bg-gray-900 pt-40 md:pt-0">
        <div className="countdown-page">
          <Timer />
          <h1 className="text-black dark:text-white" id="header">
            {HeadingGreeting()}, this is a countdown to your {month} Payday!
          </h1>
          <p className="mt-2 text-gray-300 dark:text-white">{payDate}</p>
        </div>
      </div>
    </body>
  );
};
export default App;
