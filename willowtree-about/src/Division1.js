import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './Division1.css';
import Header from './Header.js'

class Division1 extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <Header />
        </div>
        <div className="head">

          <div className='aboutImage'>
            <img class="image is loaded" src="//images.contentful.com/3cttzl4i3k1h/4os6mdHSNywUGQ4suqu8ko/10d81b0d0a6cc3e963cedc60215c6155/IMG_4335-267.jpg?w=731&h=881&q=80&fm=&fl=progressive&fit=fill" height="800" width="700" />
          </div>

          <div className='aboutText'>

            <div className="info">
              <h1> What we do </h1>
              <p> We build apps, responsive sites, bots—an</p>
              <p> lives on a screen—for the world dwqkndqd</p>
              <p>Our elite teams challenge themselves tsaxdt</p>
              <p> and design thinking with enterprise-grade </p>
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default Division1;