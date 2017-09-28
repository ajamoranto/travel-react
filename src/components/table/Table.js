import React, { Component } from 'react';
import './Table.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Table extends Component {
    render() {
      return (
      <tr>
        <td className="destination">{this.props.country}</td>
        <td className="capital">{this.props.capital}</td>
        <td className="language">{this.props.language}</td>
        <td className="population">{this.props.population}</td>
        <td className="bird">{this.props.bird}</td>
      </tr>
      );
    }
  }
  
  export default Table;