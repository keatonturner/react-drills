import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      food: [
        "spaghetti", 
        "apple",
        "pears",
        "ice cream",
        "pizza"
      ]
    }
  }
  render() {
    let foodsToDisplay = this.state.food.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        { foodsToDisplay }
      </div>
    );
  }
}

export default App;
