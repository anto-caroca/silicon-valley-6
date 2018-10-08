import React, { Component } from 'react';
import Navbar from './Navbar';
import Buttons from './Buttons';
import Pin  from './Pin';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
       <Buttons/>
       <Pin/>
      </div>
    );
  }
}

export default App;
