import * as React from 'react';
import { Helmet } from 'react-helmet';

const Error500 = () => (
  <div className="container is-fluid">
    <h1 className="title">Something</h1>
    <div className="content">
      <p>Something went wrong with the operation you tried, please try again later</p>
    </div>
    <Helmet>
      <title>Something went wrong</title>
    </Helmet>
  </div>
);

export default Error500;
