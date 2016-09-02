import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import util from './utils/firebase.js';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './styling/game.css';
import btnClass from 'classnames';



class Game extends Component {
  constructor(props) {
    super(props);
    this.state={
      response: [],
      id: "",
      painting: "",
      saved_works: "",
      accurate: { color: "black", backgroundColor: "white"}
    }
  }

  componentDidMount(event) {
    console.log('backend for game')
    util.getAll()
    .then(res => {
      console.log('saved responses', res);
      this.setState({
        saved_works: res
      })
    }).then(res => {
    const method ='post';
    const url = 'http://localhost:3000/game'
    const dataObj = { saved_works: this.state.saved_works}
    console.log(dataObj);
    axios({
      method: method,
      url: url,
      data: dataObj
    }).then((res) => {
      this.setState({
        response: res.data,
        painting: res.data.painting,
        main_gene: res.data.gene_id,
        genes: res.data.genes_hash
    });
      console.log('response data', res.data);
      console.log('state', this.state)
      console.log('in mounting', res.data.genes_hash);
      })
  })
}

  onClick(event) {
    event.preventDefault(event);
    const buttonValue = event.target.value
    console.log('clicking 2 backend w/', buttonValue);
    const method = 'post';
    const url = 'http://localhost:3000/game/:gene'
    const dataObj = { id: buttonValue }
    axios({
      method: method,
      url: url,
      data: dataObj
    }).then((res) => {
      if (buttonValue === this.state.main_gene) {
        let truestyle = {
          color: "white",
          backgroundColor: "green"
        }
        this.setState({ accurate: truestyle })
        console.log("true", this.state.accurate);
      } else {
        console.log("nope");
        let truestyle = {
          color: "white",
          backgroundColor: "red"
        }
        this.setState({ accurate: truestyle })
        console.log("false", this.state.accurate)
      }
      this.setState({
          gene_data: res.data
      });
      console.log('response data',res.data);
      console.log('state ',this.state);
    })

  }

  render() {
    const returned_response = this.state.response

      console.log(this.state.accurate);

    return (
      <div className="App">
        <Navbar inverse className="nav-bar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Cool App w/ No Name Yet</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/learn">
                <NavItem eventKey={1} className="buttonnnn">Discover</NavItem>
              </LinkContainer>
              <LinkContainer to="/game">
                <NavItem eventKey={2} className="buttonnnn">Learn</NavItem>
              </LinkContainer>
              <LinkContainer to="/explore">
                <NavItem eventKey={3} className="buttonnnn">Explore</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={4} className="buttonnnn">About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      <div className="rendered-items">
        <img src= {this.state.painting} alt="render"/>
        <br />
          <Button style={this.state.accurate} value={returned_response.first_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.first_gene_name}</Button>
          <Button style={this.state.accurate} value={returned_response.second_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.second_gene_name}</Button>
        <br />
          <Button style={this.state.accurate} value={returned_response.third_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.third_gene_name}</Button>
          <Button style={this.state.accurate} value={returned_response.fourth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.fourth_gene_name}</Button>
        <br />
          <Button style={this.state.accurate} value={returned_response.fifth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.fifth_gene_name}</Button>
          <Button style={this.state.accurate} value={returned_response.sixth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.sixth_gene_name}</Button>
          {/* <h2>{this.state.accurate}</h2> */}
        </div>
      </div>
    );
  }

}

export default Game;
