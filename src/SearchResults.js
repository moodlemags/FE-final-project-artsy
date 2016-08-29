import React, { Component } from 'react';
import axios from 'axios';
import './styling/search.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : "",
      response: []
    }
  }

  componentDidMount(event) {
    console.log('props', this.props);
    console.log('state', this.state);
    // const method = 'post';
    // const url = 'http://localhost:3000/artsy/search'
    // const dataObj = { }
    //
    // axios({
    //   method: method,
    //   url: url,
    //   data: dataObj
    // }).then((res) => {
    //   this.setState({
    //       response: res.data
    //   });
    //   console.log('response data',res.data);
    //   console.log('state response',this.state.response);
    // })
  }

  render() {
    const return_value = this.props.response
    let time_id = new Date()
    console.log('props', this.props);
    console.log('return value response', return_value);
    return (
      <div className="App">
        <div className="renderArt" key={time_id}>
          <p className="rendering"><span className="title">Painting Title:</span> {return_value.art_title} </p>
          <p className="rendering"><img src={return_value.art_link} alt="rendered-painting"/></p>
          <p className="rendering"><span className="title">Gene Title:</span>  {return_value.art_gene_name}</p>
          <p className="rendering">{return_value.art_gene_desc}</p>
        </div>

      </div>
    );
  }

}

export default SearchResults;
