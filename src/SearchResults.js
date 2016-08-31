import React, { Component } from 'react';
import './styling/search.css';
import { browserHistory, Link } from 'react-router';
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

  handleClick(event){
    event.preventDefault(event);
    const id = this.props.response.artist_id
    const path = `/learn/search/${id}`;
    console.log(path);
    browserHistory.push(path)
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      artist: this.props.artist,
      response: this.state.response.artist_id
    }))
    const return_value = this.props.response

    console.log('return value response', return_value);
    return (
      <div className="App">
        <div className="container-artist">
            <div>Artist: {return_value.artist_page}</div>
            <div>Born in: {return_value.artist_year} in {return_value.artist_hometown}</div>
            <div><img src={return_value.artist_image}/></div>
            {/* <img src={require('./goldframe.gif')} /> */}
            <button className='favs-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickFavorite(event)}>Add to study</button>
            <button className='favs-button waves-effect waves-teal btn-flat' onClick={(event) => this.handleClick(event)}><Link to="/learn/search/:gene">Learn More</Link></button>

        </div>
        {childrenWithProps}
        </div>
    );
  }

}

export default SearchResults;
