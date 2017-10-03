import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './abc.gif'
import abcd from './Swaroop.jpg'
import xyz from './wonderwoman.jpg'
import './App.css';
import Clock from './sample2.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Swaroop's Reactor!</h1>
        </header>
        <p className="App-intro">
          Testing under process!!!
          <p>You wont get the page right now. Don't worry, we will keep you poted ;)</p>
        </p>
        <Clock />
        <img src={abcd} className="App-abcd" alt="abcd" />
        <footer className="App-footer">
        <img src={xyz} className="App-xyz" alt="xyz" />
        <h1 className="App-title">Footer is here!</h1>
        </footer>
      </div>
    

    );
  }
}

export default App;
//To get started, edit <code>src/App.js</code> and save to reload.