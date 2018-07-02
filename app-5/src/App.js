import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage= {'https://bloximages.newyork1.vip.townnews.com/pilotonline.com/content/tncms/assets/v3/editorial/c/d5/cd5dde92-1b18-5c2a-a624-a9752297ed3f/57467adbdc1dc.image.jpg'} />
      </div>
    );
  }
}

export default App;
