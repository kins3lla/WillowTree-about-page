import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './division4.css';
import Header from './Header.js'
import { Card, Col, Row } from 'antd';



class Division2 extends React.Component {

  render() {
    return (

      <div className="wrapper">
        <div clasName="main">

          <Row className='row'>

            <Col span={12} className='Col1'>
              <div className="main1">
                <h1 > How we do it </h1>
              </div>
            </Col>


            <Col span={12} className='Col2'>
              <div className="main2">

                <p>Our teams work together—under the same roof</p>
                <p> in the same room. We build our creative centers in </p>
                <p> top college towns where we can attract top talent </p>
                <p> and offer an incredible lifestyle. We hire only the </p>
                <p> best and trust our teams to work autonomously. </p>
                <p>We are independent—our only responsibility is </p>
                <p>to deliver extraordinary outcomes to our clients.</p>

              </div>
            </Col>
          </Row>

        </div>



      </div>


    );
  }
}

export default Division2;