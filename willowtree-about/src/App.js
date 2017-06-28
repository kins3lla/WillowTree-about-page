import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './App.css';
import Header from './Header.js';
import Division1 from './Division1.js';
import DivisionCarousel from './DivisionCarousel.js';
import DivisionPeople from './DivisionPeople.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Division1 />
        <DivisionCarousel />
        <DivisionPeople />

      </div>
    );
  }
}

export default App;
