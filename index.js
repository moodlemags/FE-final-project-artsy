import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import Game from './src/Game';
import About from './src/About';
import Search from './src/Search';
import Explore from './src/Explore';
import SearchResults from './src/SearchResults';
import LearnMore from './src/LearnMore';
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
