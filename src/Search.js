import React, { Component } from 'react';
import axios from 'axios';
import './styling/search.css';
// import { Link } from 'react-router';

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
    const return_value = this.state.response
    let time_id = new Date()
    console.log(time_id);
    console.log('return value response', return_value);
    return (
      <div className="App">
        <h2>Welcome to Maggie's Artsy API Playground</h2>
        <input type="text" id="search-artsy" onChange={this.handleSearch.bind(this)} placeholder="type in me"/>
        <button onClick={(event) => this.onClick(event)}>Oh button, let me talk to backend</button>
                <div className="renderArt" key={time_id}>
                  <p>Painting Title: {return_value.art_title} </p>
                  <p>Painting: <img src={return_value.art_link} alt="rendered-painting"/></p>
                  <p>Gene Title: {return_value.art_gene_name}</p>
                  <p>More Genes: {return_value.art_gene_desc}</p>
                </div>


      </div>
    );
  }
}

export default Search;
