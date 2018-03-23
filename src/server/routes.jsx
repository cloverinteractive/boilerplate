// @flow

import React from 'react';
import { App } from 'routes';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';
import render from 'server/helpers/renderer';

type Props = {
  context: Object,
  location: string,
};

const SSR = ({ context, location }: Props) => (
  <Provider store={store}>
    <StaticRouter context={context} location={location}>
      <App />
    </StaticRouter>
  </Provider>
);

export default (req: express$Request, res: express$Response) => {
  const context = {};

  res.send(render(<SSR context={context} location={req.url} />));
};
