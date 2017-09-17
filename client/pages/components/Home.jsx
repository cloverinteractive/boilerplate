// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { MAIN_TREE, PAGES_TREE } from 'pages/constants/home';
import * as messages from 'main/flux/actions/messages';
import 'pages/styles/code.css';

type Props = {
  addError: Function,
  addNotice: Function,
  addWarning: Function,
};

const Home = (props: Props) => (
  <Container>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Header as="h1">Everything is Running!</Header>

    <p>Awesome, you&apos;ve got this far, here are some pointers to make development easier.</p>

    <Divider section />

    <Header as="h2">Bundled goodies</Header>

    <p>Here&apos;s the list of the the packages this boiler plate configures for you.</p>

    <ul>
      <li>
        <a href="https://babeljs.io">Babel</a> - <em>
          The compiler for writing next generation JavaScript
        </em>
      </li>
      <li>
        <a href="https://eslint.org">Eslint</a> - <em>
          Pluggable JavaScript linter
        </em>
      </li>
      <li>
        <a href="https://expressjs.com">Express</a> - <em>
          Fast, unopinionated, minimalist web framework for Node.js
        </em>
      </li>
      <li>
        <a href="https://flow.org">Flow</a> - <em>
          A Static Type Checker for JavaScript
        </em>
      </li>
      <li>
        <a href="https://mochajs.org">Mocha</a> - <em>
          The fun, simple, flexible JavaScript test framework
        </em>
      </li>
      <li>
        <a href="https://facebook.github.io/react/">React</a> - <em>
          A JavaScript library for building user interfaces
        </em>
      </li>
      <li>
        <a href="https://reacttraining.com/react-router/">React Router</a> - <em>
          Declarative Routing for React.js
        </em>
      </li>
      <li>
        <a href="http://redux.js.org/">Redux</a> - <em>
          Redux is a predictable state container for JavaScript apps.
        </em>
      </li>
      <li>
        <a href="https://semantic-ui.com">SemanticUI</a> - <em>
          Semantic is a development framework that helps create beautiful, responsive
          layouts using human-friendly HTML.
        </em>
      </li>
      <li>
        <a href="https://webpack.js.org/concepts/">Webpack</a> - <em>
          Webpack is a module bundler for modern JavaScript applications.
        </em>
      </li>
    </ul>

    <Divider section />

    <Header as="h2">Components</Header>

    <p>
      The app comes bundled with a super basic <strong><em>redux</em></strong> reducer for adding
      and removing <strong><em>SemanticUI</em></strong>
      <a
        href="https://react.semantic-ui.com/collections/message"
        rel="noopener noreferrer"
        target="_blank"
      >
        &lt;Message /&gt;
      </a>
      . You can find the code for
      these, under the <strong><em>client/main</em></strong> folder. You can also try
      the basic messaging by clicking any of the following buttons.
    </p>

    <Button.Group>
      <Button color="green" onClick={() => { props.addNotice('This is a successful message'); }}>
        Notice
      </Button>
      <Button.Or />
      <Button color="yellow" onClick={() => { props.addWarning('This is a warning message'); }}>
        Warning
      </Button>
      <Button.Or />
      <Button color="red" onClick={() => { props.addError('This is an error message'); }}>
        Error
      </Button>
    </Button.Group>

    <p>Folder structure looks like this: </p>

    <Segment className="code" inverted>
      <code>
        <pre>{ MAIN_TREE }</pre>
      </code>
    </Segment>

    <p>
      It also comes pre-packaged with 3 pages, <strong><em>&lt;Home /&gt;</em></strong>,
      <strong><em> &lt;About /&gt;</em></strong> and <strong><em>&lt;Error404 /&gt;</em></strong>.
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
        <pre>{ PAGES_TREE }</pre>
      </code>
    </Segment>


    <p>
      Check our <strong>
        <a href="https://github.com/cloverinteractive/boilerplate">
          README
        </a>
      </strong> for more details.
    </p>
  </Container>
);

export default connect(null, messages)(Home);
