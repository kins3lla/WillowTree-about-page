import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './DivisionPeople.css';
import Person1 from '../src/OurPeople/Person1.png';
import Person2 from '../src/OurPeople/Person2.png';
import Person3 from '../src/OurPeople/Person3.png';
import Person4 from '../src/OurPeople/Person4.png';
import Person5 from '../src/OurPeople/Person5.png';
import Person6 from '../src/OurPeople/Person6.png';
import Person7 from '../src/OurPeople/Person7.png';
import Person8 from '../src/OurPeople/Person8.png';
import Person9 from '../src/OurPeople/Person9.png';
import Person10 from '../src/OurPeople/Person10.png';


class DivisionPeople extends React.Component {
  render() {
    var style = {
      margin: '20px',
      padding: '20px'

    };

    return (
      <div className="App">

        <div className="heading"> <h1> Our Leadership </h1> </div>

        <div className="Images">

          <div className="row1">
            <img style={style} src={Person1} className="image1" />
            <img style={style} src={Person2} className="image2" />
            <img style={style} src={Person3} className="image3" />
          </div>
          <div className="row2">
            <img style={style} src={Person4} className="image4" />
            <img style={style} src={Person5} className="image5" />
            <img style={style} src={Person6} className="image6" />
          </div>
          <div className="row3">
            <img style={style} src={Person7} className="image7" />
            <img style={style} src={Person8} className="image8" />
            <img style={style} src={Person9} className="image9" />
          </div>
          <div className="row4">
            <img style={style} src={Person10} className="image10" />
          </div>
        </div>


      </div>
    );
  }
}

export default DivisionPeople;