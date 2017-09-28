import React, { Component } from 'react';
import './Hero.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Background1 from '../../heroImages/travel_hero.jpg';
import Background2 from '../../heroImages/background2.jpg';
import Background3 from '../../heroImages/background3.jpg';
import Background4 from '../../heroImages/background4.jpg';


class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div id="heroText"style={{height:300,margin:0}}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div className="jumbo" style={{height:300,width:"100%",backgroundImage:`url(${Background1})`}}>
                <br/>
                <br/>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>
            </div>
            <div className="jumbo" style={{height:300,width:"100%",backgroundImage:`url(${Background2})`}}>
            <br/>
                <br/>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>
            </div>
            <div className="jumbo" style={{height:300,width:"100%",backgroundImage:`url(${Background3})`}}>
            <br/>
                <br/>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>
            </div>
            <div className="jumbo" style={{height:300,width:"100%",backgroundImage:`url(${Background4})`}}>
            <br/>
                <br/>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>
            </div>
          </React_Bootstrap_Carousel>
        </div>
      )
    }
};

export default Hero;