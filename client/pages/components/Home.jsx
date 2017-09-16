import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { MAIN_TREE, PAGES_TREE } from 'pages/constants/home';
import 'pages/styles/code';

const Home = () => (
  <Container>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Header as="h1">Everything is Running!</Header>

    <p>Awesome, you&apos;ve got this far, here are some pointers to make development easier</p>

    <p>
      This boilerplate comes pre-packaged with 3 pages,
      <em>&lt;Home /&gt;</em>, <em>&lt;About /&gt;</em> and <em>&lt;Error404 /&gt;</em>.
      You can use the navigation at the top to visit the first two, and type any unexisting
      page in the browser URL to visit the latter.
    </p>

    <p>
      We&apos;ve organized the application by features and created a new folder per each new
      feature, the aforementions components can be found at <em>client/pages</em> in this app&apos;s
      folder. Folder structure looks like this:
    </p>

    <Segment className="code" inverted>
      <code>
        <pre>{ PAGES_TREE.trim() }</pre>
      </code>
    </Segment>

    <p>
      The app also comes bundled with <em>redux</em> and a super basic reducer for adding and
      removing <em>SemanticUI</em> <em>&lt;Message /&gt;</em>&apos;s. You can find the code for
      these under <em>client/main</em> in this app&apos;s folder. Folder structure looks like this:
    </p>

    <Segment className="code" inverted>
      <code>
        <pre>{ MAIN_TREE.trim() }</pre>
      </code>
    </Segment>

    <p>
      { 'Check out our ' }
      <strong><a href="https://github.com/cloverinteractive/boilerplate">README</a></strong>
      { ' for more details.' }
    </p>
  </Container>
);

export default Home;
