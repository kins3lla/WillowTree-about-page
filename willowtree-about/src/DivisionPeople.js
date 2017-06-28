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
      padding: '20px',
      width: '40%',
      height: 'auto'

    };

    return (
      <div className="App">

        <div className="heading"> <h1> Our Leadership </h1> </div>

        <div className="Images">

          <img style={style} src={Person1} />
          <img style={style} src={Person2} />
          <img style={style} src={Person3} />
          <img style={style} src={Person4} />
          <img style={style} src={Person5} />
          <img style={style} src={Person6} />
          <img style={style} src={Person7} />
          <img style={style} src={Person8} />
          <img style={style} src={Person9} />
          <img style={style} src={Person10} />
        </div>


      </div>
    );
  }
}

export default DivisionPeople;