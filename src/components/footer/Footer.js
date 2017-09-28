import React, { Component } from 'react';
import './Footer.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-bottom">
    <div className="container-fluid">
      <div className="navbar-footer">
        <a className="navbar-brand" href="#">&copy;Travel is Fun</a>
      </div>

      
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="http://facebook.com">Facebook</a></li>
          <li><a href="http://twitter.com">Twitter</a></li>
        </ul>
      </div>
     
    </div>
   
  </nav>
    );
  }

}

export default Footer;