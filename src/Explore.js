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
      response: [],
      array_res: []
    }
  }

  getFavorites() {
    util.getAll()
    .then((res) => {
      const all_faves = { res }
      console.log('arr', res);
      this.setState({array_res: res })
      console.log('getAll', res);
    })
  }

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const art_saved = this.state
    console.log('new state', art_saved);
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
            {/* {
                  art_saved.map((fave) => {
                    return ( */}
                      <div>
                        <p>{art_saved[0]}</p>
                      </div>
                    {/* )
                  }

                )
              } */}
          </div>
        </div>
    );
  }
}

export default Explore;
