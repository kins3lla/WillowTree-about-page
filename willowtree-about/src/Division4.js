import React, { Component } from 'react';
import willowtree from './willowtree.png';
import './division4.css';
import Header from './Header.js'

import { Card, Col, Row } from 'antd';

 
class Division3 extends React.Component {

  render() {
    return (
 
 <div className="hello" style={{ background: '#ECECEC', padding: '10px', textAlign:'left', fontFamily:'Helvetica Neue',letterSpacing: '1px' , fontWeight: '500' }}>
    <Card title="CORE SERVICES" bordered={false} style={{ width: 200, fontFamily:'Times New Roman,Times,serif', fontSize: '15px', lineHeight: '30px', fontWeight: '600px', marginLeft: "100px"} }>
      <h1>Mobile Product Strategy </h1>
      <h1>Mobile Engagement</h1>
      <h1>Web Development</h1>
    </Card>

     <div className="hello1"style={{ background: '#ECECEC', marginRight: '400px', padding: '10px' }}>
    <Card title= "     " bordered={false} style={{ width: 300, fontFamily:'Times New Roman,Times,serif',  display:'block', lineHeight: '30px', marginTop: '40px', fontWeight: '600px', fontSize: '15px', textAlign: 'center'}}>
      <h1>Product Design </h1>
      <h1>Native App</h1>
      <h1>Rapid Protyping</h1>
    </Card>

    </div>
    </div>

      
    );
  }
}

export default Division3;