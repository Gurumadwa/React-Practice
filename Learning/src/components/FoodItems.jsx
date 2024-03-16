import React, { useState } from "react";
import s from "../styles/FoodItems.module.css";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      let newItem = e.target.value;
      e.target.value = "";
      let newItemArray = [...foodItems, newItem];
      setFoodItems(newItemArray);
    }
  };


  const handleBuyButton = () => {

  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the food name here"
        onKeyDown={handleChange}
      />

      {foodItems.map((item, index) => (
        <ul class="list-group">
          <li class="list-group-item">
            {item}
            <button type="button" className="btn btn-info" onClick={(e)=>handleBuyButton(e,item)}>
              Buy
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FoodItems;
