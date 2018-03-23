// @flow

import type { Element } from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';

const isDevelop: boolean = process.env.NODE_ENV !== 'production';

export default (Component: Element<any>): string => {
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
        <script async src="/bundle.js"></script>
      </body>
    </html>`;

  return template;
};
