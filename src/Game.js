import React, { Component } from 'react';
import axios from 'axios';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      id: ""
    }
  }

  onClickRenaissance(event) {
    event.preventDefault();
    console.log(event.target.value);
    const gene_id = event.target.value
    this.setState({id: gene_id})
    console.log('backend for game')
    const method ='post';
    const url = 'http://localhost:3000/game'
    const dataObj = { id: gene_id}
    axios({
      method: method,
      url: url,
      data: dataObj
    }).then((res) => {
      this.setState({
        response: res.data
      });
      console.log('response data', res.data);
      console.log('state set', this.state.response)
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="nav-bar">This is the game page</h2>
        <button value="4f26f327dc7f670001000126" onClick={(event) => this.onClickRenaissance(event)}>High Renaissance</button>
      </div>

    );
  }

}

export default Game;
