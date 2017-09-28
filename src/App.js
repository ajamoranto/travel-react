import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';
import { Navbar, Jumbotron, Button, Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <br/>
        <br/>

        <Hero />
        <div className="cards">
        <Grid>
          <Row className="show-grid">
            <Cards name="Spain" image="assets/spain_flag.svg" link ="http://www.spain.info/en_US/"/>
            <Cards name="Italy" image="assets/italy_flag.svg" link ="http://www.italia.it/en/home.html"/>
            <Cards name="Aruba" image="assets/aruba_flag.svg" link ="http://www.arubatourism.com/"/>
            <Cards name="Chile" image="assets/chile_flag.svg" link ="http://chile.travel/en/"/>
          </Row>
        </Grid>
        </div>

        
        <h3>&nbsp;</h3>
        <h3>Some information about the places I would like to visit</h3>
        
        <table id="data" className="table table-striped table-bordered">
    
          <thead>
            <tr>
              <th className="destination">Destination</th>
              <th className="capital">Capital</th>
              <th className="language">Official Language</th>
              <th className="population">Population (approx.)</th>
              <th className="bird">National Bird</th>
            </tr>
          </thead>
          <tbody>


            <Table country="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle"/>
            <Table country="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebird"/>
            <Table country="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl"/>
            <Table country="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean Condor"/>

          </tbody>
          </table>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
