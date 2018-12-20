import React from 'react';
import Routes from 'routes';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import render from 'server/helpers/renderer';
import store from 'server/store';

const SSR = ({ context, location }) => (
  <Provider store={store}>
    <StaticRouter context={context} location={location}>
      <Routes />
    </StaticRouter>
  </Provider>
);

export default (req, res) => {
  const context = {};
  res.send(render(<SSR context={context} location={req.url} />, store));
};
