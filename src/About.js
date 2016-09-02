import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './styling/game.css';

class About extends Component {


  render() {

    return (
      <div className="App">
        <Navbar inverse className="nav-bar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React-Bootstrap</Link>
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

        <img src={require('./assets/maggie.png')} alt="presentation" />

      </div>
    );
  }

}

export default About;
