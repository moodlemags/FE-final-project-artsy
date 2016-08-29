import React, { Component } from 'react';
import axios from 'axios';
import './styling/search.css';
import { Link } from 'react-router';

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
    const url = 'http://localhost:3000/artsy'
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
    return (
      <div className="App">
        <h2 className="nav-bar">Welcome to Maggie's Artsy API Playground</h2>
        <input type="text" className="search-artsy" onChange={this.handleSearch.bind(this)} placeholder="type in me"/>
      <button onClick={(event) => this.onClick(event)}><Link to="/artsy/search">Oh button, let me talk to backend</Link></button>
      <div>{childrenWithProps}</div>
      </div>
    );
  }
}

export default Search;
