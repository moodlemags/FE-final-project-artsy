import React, { Component } from 'react';
import axios from 'axios';
import './styling/search.css';
import {Link} from 'react-router';
import Time from 'react-time';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : "",
      response: []
    }
  }

  componentDidMount() {
    console.log('display backend', this.state.response);
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
      </div>
    );
  }


export default Display;
