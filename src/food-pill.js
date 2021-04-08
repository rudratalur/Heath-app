import React from "react";

function FoodItems({name, calories, measure, onFoodPillClick}){
    return (
      <div onClick = {() => onFoodPillClick(name)} >
      <span>{name}</span>
      <span>{calories}</span>
      <span>{measure}</span>
    </div>
    );  
  }
export default FoodItems;