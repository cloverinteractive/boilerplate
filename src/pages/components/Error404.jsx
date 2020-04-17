import * as React from 'react';
import { Helmet } from 'react-helmet';

const Error404 = () => (
  <div className="container is-fluid">
    <h1 className="title">Page not found</h1>
    <div className="content">
      <p>The page you we&apos;re looking for does not exist.</p>
    </div>
    <Helmet>
      <title>Oops! Page not found</title>
    </Helmet>
  </div>
);

export default Error404;
