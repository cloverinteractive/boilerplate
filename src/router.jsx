import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const HMR = hot(module)(App);

export default () => (
  <Router>
    <HMR />
  </Router>
);
