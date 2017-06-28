import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './division2.css';
import Header from './Header.js'

import { Card, Col, Row } from 'antd';


 
class Division3 extends React.Component {

  render() {
    return (
 
 <div className="hello" style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Core Services" bordered={false} style={{ width: 300 }}>
      <h1>Mobile Product Strategy </h1>
      <h2>Mobile Engagement</h2>
      <h3>Web Developmentt</h3>
    </Card>

     <div className="hello1"style={{ background: '#ECECEC', padding: '30px' }}>
    <Card  bordered={false} style={{ width: 300 }}>
      <h1>Product Design </h1>
      <h2>Native App Development </h2>
      <h3>Rapid Protyping</h3>
    </Card>

    </div>
    </div>

      
    );
  }
}

export default Division3;