import React, { Component } from 'react';
import axios from 'axios';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import util from './utils/firebase.js';
import './styling/game.css';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state={
      response: [],
      id: "",
      painting: "",
      saved_works: ""
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

    if (buttonValue == this.state.main_gene) {
      console.log("true");
    } else {
      console.log("nope");
    }

    axios({
      method: method,
      url: url,
      data: dataObj
    }).then((res) => {
      this.setState({
          gene_data: res.data
      });
      console.log('response data',res.data);
      console.log('state ',this.state);
    })
  }

  render() {
    const returned_response = this.state.response
    const genes_hash = this.state.genes


    const popoverClick = (<Popover id="popover-trigger-click" id="popover-positioned-right" title="Popover bottom">
              <strong>Hey </strong> Mag</Popover>);
    return (
      <div className="App">
        <h2 className="nav-bar">This is the game page</h2>
        <div className="rendered-items">
        <img src= {this.state.painting} />
        <br />
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.first_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.first_gene_name}</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.second_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.second_gene_name}</Button>
        </OverlayTrigger>
        <br />
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.third_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.third_gene_name}</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.fourth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.fourth_gene_name}</Button>
        </OverlayTrigger>
        <br />
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.fifth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.fifth_gene_name}</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={popoverClick}>
          <Button value={returned_response.sixth_gene_id} bsStyle="default" onClick={(event) => this.onClick(event)}>{returned_response.sixth_gene_name}</Button>
        </OverlayTrigger>

        </div>
      </div>
    );
  }

}

export default Game;
