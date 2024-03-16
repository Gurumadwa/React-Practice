import React from "react";

const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className="button-container">
        {
            buttonNames.map( (item) => (
                <button className="btn">{item}</button>
            ))
        }
    </div>
  );
};

export default ButtonContainer;
