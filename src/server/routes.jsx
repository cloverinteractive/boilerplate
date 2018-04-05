// @flow

import React from 'react';
import Routes from 'routes';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import render from 'server/helpers/renderer';
import store from 'server/store';

type Props = {
  context: Object,
  location: string,
};

const SSR = ({ context, location }: Props) => (
  <Provider store={store}>
    <StaticRouter context={context} location={location}>
      <Routes />
    </StaticRouter>
  </Provider>
);

export default (req: express$Request, res: express$Response) => {
  const context = {};

  res.send(render(<SSR context={context} location={req.url} />, store));
};
