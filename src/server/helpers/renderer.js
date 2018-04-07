// @flow

import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

const isDevelop: boolean = process.env.NODE_ENV !== 'production';

type Store = {
  getState: () => {} | empty | void,
};

export default (Component: React$Element<any>, store: Store): string => {
  const content = renderToString(Component);
  const helmet = Helmet.renderStatic();
  const styles = isDevelop ? '' : '<link rel="stylesheet" href="/styles.css">';

  const template =
    `<!doctype html>
    <html lang="en-US">
      <head>
        <meta charset="utf-8">
        ${helmet.link.toString()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styles}
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())};
        </script>
        <script async src="/bundle.js"></script>
      </body>
    </html>`;

  return template;
};
