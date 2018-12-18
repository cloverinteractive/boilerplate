import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Header, Popup, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { MAIN_TREE, PAGES_TREE } from 'pages/constants/home';
import * as messages from 'main/flux/actions/messages';

import libraries from 'pages/constants/libraries';
import Libraries from 'pages/components/Libraries';

import styles from 'pages/css/code.css';

const Home = ({ addError, addNotice, addWarning }) => {
  const errorButton = (
    <Button color="red" onClick={() => { addError('This is an error message'); }}>
      Error
    </Button>
  );

  const noticeButton = (
    <Button color="green" onClick={() => { addNotice('This is a successful message'); }}>
      Notice
    </Button>
  );

  const warningButton = (
    <Button color="yellow" onClick={() => { addWarning('This is a warning message'); }}>
      Warning
    </Button>
  );

  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Segment vertical>
        <Header as="h1">Everything is Running!</Header>
        <p>Awesome, you&apos;ve got this far, here are some pointers to make development easier.</p>
      </Segment>

      <Segment vertical>
        <Header as="h2">Bundled goodies</Header>
        <p>Here&apos;s the list of the the packages this boiler plate configures for you.</p>
        <Libraries libraries={libraries} />
      </Segment>

      <Segment vertical>
        <Header as="h2">Components</Header>
        <p>
          The app comes bundled with a super basic <strong><em>redux</em></strong> reducer for
          adding and removing <strong><em>SemanticUI</em></strong>
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
          <Popup
            content="Successful alerts will automatically close"
            inverted
            size="mini"
            trigger={noticeButton}
          />
          <Button.Or />
          <Popup
            content="Warning alerts will hang until manually closed"
            inverted
            size="mini"
            trigger={warningButton}
          />
          <Button.Or />
          <Popup
            content="Error alerts will hang until manually closed"
            inverted
            size="mini"
            trigger={errorButton}
          />
        </Button.Group>

        <p>Folder structure looks like this: </p>

        <Segment className={styles.codeWrapper} inverted>
          <code>
            <pre className={styles.code}>{MAIN_TREE}</pre>
          </code>
        </Segment>

        <p>
          It also comes pre-packaged with 3 pages, <strong><em>&lt;Home /&gt;</em></strong>,
          <strong><em> &lt;About /&gt;</em></strong> and
          <strong><em>&lt;Error404 /&gt;</em></strong>. You can use the navigation at the top
          to visit the first two, and type any unexisting page in the browser URL to visit the
          latter.
        </p>

        <p>
          We&apos;ve organized the application by features and created a new folder per each new
          feature, the aforementions components can be found at <em>client/pages</em> in this
          app&apos;s folder. Folder structure looks like this:
        </p>

        <Segment className={styles.codeWrapper} inverted>
          <code>
            <pre className={styles.code}>{PAGES_TREE}</pre>
          </code>
        </Segment>

      </Segment>

      <Segment vertical>
        <p>
          Check our
          { ' ' }
          <strong>
            <a href="https://github.com/cloverinteractive/boilerplate">
              README
            </a>
          </strong>
          { ' ' }
          for more details.
        </p>
      </Segment>
    </Container>
  );
};

export default connect(null, messages)(Home);
