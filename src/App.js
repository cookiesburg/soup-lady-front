import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Landing />
      </div>
    );
  }
}

export default App;
