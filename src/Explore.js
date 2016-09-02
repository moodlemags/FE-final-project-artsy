import React, { Component } from 'react';
import './styling/App.css';
import {Link} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import util from './utils/firebase.js';


class Explore extends Component {
  constructor(props) {
    super(props);
    this.state={
      response: {}
    }
  }

  componentDidMount() {
    util.getAll()
    .then(res => {
      this.setState({ response: res })
      console.log('result', res);
    })
  }

  render() {
    console.log(this.state);
      const favorites = this.state.response
        console.log('fave',favorites);
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

          <div className="main-componenet">
            {/* {
                  favorites.map((favorite) => {
                    return (
                      <div>
                        <p>{favorites.artist_name}</p>
                      </div>
                    )
                  }

                )
              } */}
          </div>
        </div>
    );
  }
}

export default Explore;
