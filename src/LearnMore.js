import React, { Component } from 'react';
import axios from 'axios';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
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
    const url = 'https://mighty-ravine-78456.herokuapp.com/learn/search/:gene'
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
    const popoverClickOne = (<Popover id="popover-trigger-click" id="popover-positioned-right" title={this.state.response.one_name}>
              <strong>{this.state.response.one_name}</strong> {this.state.response.one_desc}</Popover>);
    const popoverClickTwo = (<Popover id="popover-trigger-click" id="popover-positioned-right" title={this.state.response.two_name}>
              <strong>{this.state.response.two_name}</strong> {this.state.response.two_desc}</Popover>);
    const popoverClickThree = (<Popover id="popover-trigger-click" id="popover-positioned-right" title={this.state.response.three_name}>
              <strong>{this.state.response.three_name}</strong> {this.state.response.three_desc}</Popover>);
    const popoverClickFour = (<Popover id="popover-trigger-click" id="popover-positioned-right" title={this.state.response.four_name}>
              <strong>{this.state.response.four_name}</strong> {this.state.response.four_desc}</Popover>);
    return (
      <div className="App">
        <div className="render-genes">
          <br />
          <br />
            <OverlayTrigger placement="right" overlay={popoverClickOne}>
              <Button bsStyle="default">{this.state.response.one_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={popoverClickTwo}>
              <Button bsStyle="default">{this.state.response.two_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={popoverClickThree}>
              <Button bsStyle="default">{this.state.response.three_name}</Button>
            </OverlayTrigger>
            <br />
            <OverlayTrigger placement="right" overlay={popoverClickFour}>
              <Button bsStyle="default">{this.state.response.four_name}</Button>
            </OverlayTrigger>
        </div>
      </div>
    );
  }
}


export default LearnMore;
