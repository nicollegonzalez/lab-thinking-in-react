import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Main from './components/main/Main';

class App extends Component {
  render() {
    // console.log(data);
    // console.log(data.data);
    return (
      <div className="App">
        <Main products = { data.data } />
      </div>
    );
  }
}

export default App;
