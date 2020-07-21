import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import RecipePage from './containers/RecipePage';
import * as serviceWorker from './serviceWorker';
// import {  Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/recipes/" component={RecipePage} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
