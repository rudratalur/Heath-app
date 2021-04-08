// import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FoodItems from './food-pill';
import calorieData from './calorie-data';
// import React, { Component } from 'react';

// foodPillClickHandler = (name) => {
//   this.setState({FoodClicked: name})
// }
function Header ({heading}) {
  return <h1>{heading}</h1>
}
function FoodClicked({foodClicked}) {
  return <h2> {foodClicked} </h2>
}
class App1 extends React.Component {
  state = {
    foodClicked : "nothing"
  }
  render(){
    return (
      <div>
       <Header heading = {"teying more props"} />
       {
         calorieData.slice(0,10).map(({name, calories, measure}) => (
           <FoodItems key = {name} name = {name} calories = {calories} measure = {measure} 
           onFoodPillClick = {name => this.setState({foodClicked: name})} />
         ))
       }
       <FoodClicked foodClicked = { this.state.foodClicked }/>
     </div>
   );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1/>,rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
