import React, { Component } from 'react';
import { Row, Col } from 'antd';
import WillowTreeApps from "./WillowTreeApps.png";
import './Header.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Header extends React.Component {
  render() {
    var style = {
      height: 'auto',
      width: '70%'
    };

    var linkStyle = {
      margin: '20px'
    };


    return (
      <div className='header'>

        <div className='logo'>
          <img src={WillowTreeApps} style={style} />
        </div>

        <div className='links'>
          <a style={linkStyle}>Work</a>
          <a className='aboutLink' style={linkStyle}>About</a>
          <a style={linkStyle}> Careers </a>
          <a style={linkStyle}> Ideas</a>
          <a style={linkStyle}> Contact Us</a>

        </div>

      </div>
    );
  }

}
export default Header;