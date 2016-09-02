import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './Game';
import About from './About';
import Search from './Search';
import Explore from './Explore';
import SearchResults from './SearchResults';
import LearnMore from './LearnMore';
import { Router, Route, browserHistory } from 'react-router';
import './styling/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/learn" component={Search}>
      <Route path="/learn/search" component={SearchResults}>
        <Route path="/learn/search/:gene" component={LearnMore} />
      </Route>
    </Route>
    <Route path="/game" component={Game}></Route>
    <Route path="/explore" component={Explore} />
    <Route path="/about" component={About}></Route>
  </Router>
  ,document.getElementById('root')
);
