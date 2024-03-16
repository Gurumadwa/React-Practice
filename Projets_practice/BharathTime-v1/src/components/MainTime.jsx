import React from "react";

const MainTime = () => {
//   let currDate = "2-2-2024";
//   let currTime = "10:00";

let time = new Date()
  return (
    <div className="lead">
      <div>The Date is: {time.toLocaleDateString()}</div>
      <div>The Time is: {time.toLocaleTimeString()}</div>
    </div>
  );
};

export default MainTime;
