import React, { Component } from 'react';
import axios from 'axios';
import {Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import './styling/learn.css';

class LearnMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : "",
      response: []
    }
  }

  componentDidMount(event){
    console.log('learning more !!', this.props);
    console.log(this.state);
    const method = 'post';
    const url = 'http://localhost:3000/learn/search/:gene'
    const dataObj = { artist_id: this.props.params.gene }
    console.log(dataObj);

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
    console.log(this.state.response.one_name);
    const tooltip = (<Tooltip id="tooltip"><strong>Learn more about this period</strong></Tooltip>);

    return (
      <div className="App">
        <div className="render-genes">
          <br />
          <br />
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">{this.state.response.one_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">{this.state.response.two_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">{this.state.response.three_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">{this.state.response.four_name}</Button>
            </OverlayTrigger>
        </div>
      </div>
    );
  }
}


export default LearnMore;
