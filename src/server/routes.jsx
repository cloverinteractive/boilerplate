// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from 'components/Layout';
import { App } from 'routes';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

type Props = {
  context: Object,
  location: string,
};

const SSR = ({ context, location }: Props) => (
  <Provider store={store}>
    <StaticRouter context={context} location={location}>
      <Layout>
        <App />
      </Layout>
    </StaticRouter>
  </Provider>
);

export default (req, res) => {
  const context = {};
  const html = renderToString(<SSR context={context} location={req.url} />);

  res.send(`<!doctype html>\n${html}`);
};
