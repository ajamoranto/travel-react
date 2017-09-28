import React, { Component } from 'react';
import './Navigation.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
  //  REAGULAR BOOTSTRAP CODE

  //       <nav className="navbar navbar-inverse navbar-fixed-top">
  //   <div className="container-fluid">

  //     <div className="navbar-header">
  //       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  //           <span className="sr-only">Toggle navigation</span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //           <span className="icon-bar"></span>
  //         </button>
  //       <a className="navbar-brand" href="#">My Travel Site</a>
  //     </div>


  //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  //       <ul className="nav navbar-nav navbar-right">
  //         <li><a href="#">Home</a></li>
  //         <li><a href="#">About</a></li>
  //         <li><a href="#">Stuff</a></li>
  //         <li><a href="#">Contact</a></li>
  //       </ul>
  //     </div>

  //   </div>

  // </nav>




  //react-boostrap code
  <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">My Travel Site</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">About</NavItem>
                    <NavItem eventKey={3} href="#">Stuff</NavItem>
                    <NavItem eventKey={4} href="#">Contact</NavItem>
                </Nav>
            </Navbar>



    );
  }

}

export default Navigation;