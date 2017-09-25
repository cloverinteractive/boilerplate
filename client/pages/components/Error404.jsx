import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const Error404 = () => (
  <Container text>
    <Helmet>
      <title>Oops! Page not found</title>
    </Helmet>

    <Header as="h1">Page not found</Header>
    <p>The page you we&apos;re looking for does not exist.</p>
  </Container>
);

export default Error404;
