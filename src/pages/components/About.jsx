import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const About = () => (
  <Container>
    <Helmet>
      <title>About</title>
    </Helmet>

    <Header as="h1">Made with love &lt;3!</Header>
    <p>
      We&apos;ve made this app because we spend too much time setting up new node apps.
    </p>

    <p>
      { "Think we've overlooked something? open up an " }
      <a href="https://github.com/cloverinteractive/boilerplate/issues">issue</a> in
      Github.
    </p>
  </Container>
);

export default About;
