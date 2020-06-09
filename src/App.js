import React from "react";
import "./App.css";
import Heading from "./components/heading";
import HeadingGreeting from "./components/HeadingGreeting";
import Timer from "./components/Timer";
const App = () => {
  const { month } = Heading();

  return (
    <div className="page-section">
      <div className="countdown-page">
        <Timer />
        <h1 id="header">
          {HeadingGreeting()}, this is a countdown to your {month} Payday!
        </h1>
      </div>
    </div>
  );
};
export default App;
