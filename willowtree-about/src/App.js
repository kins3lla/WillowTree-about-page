import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './App.css';
import Header from './Header.js'
import Division1 from './Division1.js'
import Division2 from './Division2.js'
import Division3 from './Division3.js'
import Division4 from './Division4.js'
import DivisionCarousel from './DivisionCarousel.js';
import DivisionPeople from './DivisionPeople.js'


class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Division1 />
        <Division2 />
        <Division4 />
        <DivisionCarousel />
        <DivisionPeople />

      </div>
    );
  }
}

export default App;
