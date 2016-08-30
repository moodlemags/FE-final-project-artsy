import React, { Component } from 'react';
import './styling/search.css';
import util from './utils/firebase.js';

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
  }

  onClickFavorite(event) {
    event.preventDefault();
    const data = {};
    console.log('data to be stored', this.props.response.artist_page);
    data[this.props.response.artist_creation] = {
      artist_name: this.props.response.artist_page
    }
    util.addFavorite(data)
    .then(res => {
      console.log('result', res);
    })
  }

  render() {
    const return_value = this.props.response
    let time_id = new Date()
    console.log('props', this.props);
    console.log('return value response', return_value);
    return (
      <div className="App">
        <div className="container-artist">
            <div>Artist: {return_value.artist_page}</div>
            <div>Born in: {return_value.artist_year} in {return_value.artist_hometown}</div>
            <div><img src={return_value.artist_image}/></div>
            {/* <img src={require('./goldframe.gif')} /> */}
        </div>
        <button className='favs-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickFavorite(event)}>Add to study</button>
        </div>
    );
  }

}

export default SearchResults;
