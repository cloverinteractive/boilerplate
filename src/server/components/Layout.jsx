// @flow

import React, { type Node } from 'react';
import isBrowser from 'helpers/env';

type Props = {
  children: Node,
};

export default ({ children }: Props) => (
  <html lang="en-US">
    <head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, maximum-scale=1.0" name="viewport" />
      <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
    </head>
    <body>
      <div id="app">
        { children }
      </div>
    </body>
    <script src="/bundle.js" />
  </html>
);
