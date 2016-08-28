import React, { Component } from 'react';
import './styling/App.css';
import {Link} from 'react-router';
// import { Button } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">  Title/Name o my Game </div>
              <button className='buttonnnn'>
                  <Link to='/artsy' className='search-button waves-effect waves-teal btn-flat'>I want to learn about one painting</Link>
              </button>
              <br />
              <button className='buttonnnn'>
                  <Link to='/game' className='search-button waves-effect waves-teal btn-flat'>I want to play a learning game</Link>
              </button>
        </div>
    );
  }
}

export default App;
