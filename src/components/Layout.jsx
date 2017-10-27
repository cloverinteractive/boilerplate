// @flow

/*
 * This component is only used by the server be careful before modifying as you may end up
 * with an undesirable app layout
 */

import React, { type Node } from 'react';

type Props = {
  children: Node,
};

// Stylesheets are only extracted in production, this prevents a 404 in the browser
const Stylesheet = () => {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <link rel="stylesheet" href="/style.css" />
  );
};

export default ({ children }: Props) => (
  <html lang="en-US">
    <head>
      <meta charSet="utf-8" />
      <Stylesheet />
      <meta content="width=device-width, maximum-scale=1.0" name="viewport" />
    </head>
    <body>
      <div id="app">
        {children}
      </div>
      <script rel="async" src="/bundle.js" />
    </body>
  </html>
);
