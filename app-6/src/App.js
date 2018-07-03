import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      emptyArr: []
    }
  }

  handleChange(val){
this.setState({userInput: val})
  }
  handleClick(){
    let fakeArr = [...this.state.emptyArr]
    fakeArr.push(this.state.userInput)
    this.setState({emptyArr: fakeArr})
  }

  render() {
      let emptyArr = this.state.emptyArr.map((e, i) => {
        return (
          <Todo key={i} task={e} />
        )
      })
    return (

      <div className="App">
      <h1>My Todo</h1>
      <input value={this.state.input} 
        onChange={ (e) => this.handleChange(e.target.value)}/>
      <button onClick={() => this.handleClick()}>Enter</button>
        
        { emptyArr } 
      </div>
    );
  }
}

export default App;
