import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      person: ''
    }
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/1").then(res => {
      this.setState({person: res.data})
    })
  }
  render() {
    return (
    <div className="App">
      <h1>Name: {this.state.person.name}</h1>
      <h1>Birth: {this.state.person.birth_year}</h1>
      <h1>Height: {this.state.person.height}</h1>
      <h1>Eye Color: {this.state.person.eye_color}</h1>
        
    </div>
    );
  }
}

export default App;
