import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filteredString: '',
      food: ["ice cream", "apple", "banana", "pizza"]
    }
  }
  handleChange(val){
    this.setState({filteredString: val})
  }
  render() {
    let foodsToDisplay = this.state.food.filter((e, i) => {
      return e.includes( this.state.filteredString);
    }).map((e, i) =>{
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        { foodsToDisplay }
      </div>
    );
  }
}

export default App;
