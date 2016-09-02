import React, { Component } from 'react';
import axios from 'axios';
import './styling/search.css';
import { Link } from 'react-router';
import { Input } from 'react-materialize';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : "",
      response: []
    }
  }

  handleSearch(event) {
    console.log('artist value', event.target.value);
    this.setState({ artist: event.target.value });
    console.log('state', this.state);
  }

  onClick(event) {
    event.preventDefault();
    console.log('clicking 2 backend');
    const method = 'post';
    const url = 'http://localhost:3000/learn'
    const dataObj = { artist: this.state.artist }

    axios({
      method: method,
      url: url,
      data: dataObj
    }).then((res) => {
      this.setState({
          response: res.data
      });
      console.log('response data',res.data);
      console.log('state response',this.state.response);
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      artist: this.state.artist,
      response: this.state.response
    }))

    let inputStyle = {
      width: 400,
      height: 50,
      fontSize: 10
    }
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

                <Input style={inputStyle} placeholder="Input Desired Artist Name" s={6} onChange={this.handleSearch.bind(this)} label="Search:" />
                <button className='favs-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClick(event)}><Link to="/learn/search">Oh button, let me talk to backend</Link></button>
            <div>{childrenWithProps}</div>
      </div>
    );
  }
}

export default Search;
