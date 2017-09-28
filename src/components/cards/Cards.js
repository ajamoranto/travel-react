import React, { Component } from 'react';
import './Cards.css';
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

class Cards extends Component {
    render() {
      return (
        //boostrap thumbnail code

        // <div className="col-md-3 text-center">
        //   <br/>
        //   <div className="thumbnail">
        //   <img src={this.props.image} />
        //   <div className="caption">
        //     <h3>{this.props.name}</h3>
        //     <a href={this.props.link} target="_blank">{this.props.name} Tourism Site</a>
        //   </div>
        // </div>
        // </div>

        //react-bootstrap code

          <Col md={3}>
          
          <div className="thumbnail">
          <img src={this.props.image} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <h4><a href={this.props.link} target="_blank">{this.props.name} Tourism Site</a></h4>
          </div>
        </div>
          
          </Col>

      );
    }
  }
  
  export default Cards;