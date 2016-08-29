import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './Search';
import Game from './Game';
import GameOver from './GameOver.js';
import About from './About';
import SearchResults from './SearchResults';
import { Router, Route, browserHistory } from 'react-router';
import './styling/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/artsy" component={Search}>
      <Route path="/artsy/search" component={SearchResults} />
    </Route>
    <Route path="/game" component={Game}>
      <Route path="/gameover" component={GameOver} />
    </Route>
    <Route path="/about" component={About} />
  </Router>
  ,document.getElementById('root')
);
