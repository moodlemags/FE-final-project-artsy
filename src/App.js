import React, { Component } from 'react';
import './styling/App.css';
import {Link} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class App extends Component {
  render() {

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

          <div className="main-componenet">
            <img src={require('./assets/meme.jpg')} alt="presentation" className="image" />
          </div>
        </div>
    );
  }
}

export default App;
