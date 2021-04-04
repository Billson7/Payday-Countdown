import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import HeadingGreeting from "./components/HeadingGreeting";
import Timer from "./components/Timer";
const App = () => {
  const { month, payDate } = Heading();

  return (
    <div className="container my-40 ">
      <div className="countdown-page">
        <Timer />
        <h1 id="header">
          {HeadingGreeting()}, this is a countdown to your {month} Payday!
        </h1>
        <p className="mt-2 text-gray-300">{payDate}</p>
      </div>
    </div>
  );
};
export default App;
