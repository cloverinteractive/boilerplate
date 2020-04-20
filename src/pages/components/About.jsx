import * as React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div className="container is-fluid">
    <h1 className="title">Made with love &lt;3!</h1>
    <div className="content">
      <p>
        We&apos;ve made this boilerplate because we spend too much time setting up new node apps.
      </p>
      <p>
        Think we&apos;ve overlooked something? open up an
        {' '}
        <a href="https://github.com/cloverinteractive/boilerplate/issues">issue</a>
        {' '}
        in Github.
      </p>
    </div>
    <Helmet>
      <title>About</title>
    </Helmet>
  </div>
);

export default About;
