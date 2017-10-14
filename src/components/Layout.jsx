// @flow

/*
 * This component is only used by the server be careful before modifying as you may end up
 * with an undesirable app layout
 */

import React, { type Node } from 'react';

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
      <script src="/bundle.js" />
    </body>
  </html>
);
