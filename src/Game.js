import React, { Component } from 'react';
import axios from 'axios';
import util from './utils/firebase.js';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      id: ""
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
        response: res.data
      });
      console.log('response data', res.data);
      console.log('state', this.state)
    })
    })
  }

  render() {
    const returned_response = this.state.response
    // let time_id = new Date()
    return (
      <div className="App">
        <h2 className="nav-bar">This is the game page</h2>
        <img src={returned_response.painting} />
        {/* <button value="4f26f327dc7f670001000126" onClick={(event) => this.onClickRenaissance(event)}>High Renaissance</button> */}
        <button>{returned_response.gene_one}</button>
        {/* <button>{returned_response.painting_artist}</button> */}
      </div>
    );
  }

}

export default Game;
