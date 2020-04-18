import * as React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { MAIN_TREE, PAGES_TREE } from 'pages/constants/home';

import libraries from 'pages/constants/libraries';
import Libraries from 'pages/components/Libraries';

import * as messages from '../../redux/actions/messages';

const Home = ({ addError, addNotice, addWarning }) => {
  const highlightClass = classNames([
    'has-text-weight-bold',
    'is-family-monospace',
    'is-italic',
  ]);

  return (
    <div className="container is-fluid">
      <article className="content">
        <h1 className="title">Everything is Running!</h1>
        <p>Awesome, you&apos;ve got this far, here are some pointers to make development easier.</p>
      </article>
      <article className="content">
        <h2 className="title">Bundled goodies</h2>
        <p>Here&apos;s the list of the the packages this boiler plate configures for you.</p>
        <Libraries libraries={libraries} />
      </article>
      <article className="content">
        <h2 className="title">Components</h2>
        <p>
          The app comes bundled with a super basic
          {' '}
          <span className={highlightClass}>redux</span>
          {' '}
          reducer for adding and removing alerts. You can find the code for these, under the
          {' '}
          <span className={highlightClass}>src/main</span>
          {' '}
          folder. You can also try the basic messaging by clicking any of the following buttons.
        </p>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button
              className="button is-success"
              onClick={() => addNotice('This is a successful message')}
              title="Successful alerts will automatically close"
              type="button"
            >
              Notice
            </button>
          </div>
          <div className="control">
            <button
              className="button is-warning"
              onClick={() => addWarning('This is a warning message')}
              title="Warning alerts will stay until manually closed"
              type="button"
            >
              Warning
            </button>
          </div>
          <div className="control">
            <button
              className="button is-danger"
              onClick={() => addError('This is an error message')}
              title="Error alerts will stay until manually closed"
              type="button"
            >
              Error
            </button>
          </div>
        </div>
        <p>Folder structure looks like this:</p>
        <pre className="is-family-monospace">{MAIN_TREE}</pre>
        <p>
          It also comes pre-packaged with 3 pages,
          <span className={highlightClass}>{' <Home />'}</span>
          ,
          <span className={highlightClass}>{' <About />'}</span>
          {' '}
          and
          <span className={highlightClass}>{' <Error404 />'}</span>
          . You can use the navigation at the top to visit the first two, and type any unexisting
          page in the browser URL to visit the latter.
        </p>
        <p>
          We&apos;ve organized the application by features and created a new folder per each new
          feature, the aforementions components can be found at
          {' '}
          <span className={highlightClass}>src/pages</span>
          {' '}
          in this
          app&apos;s folder. Folder structure looks like this:
        </p>
        <pre className="is-family-monospace">{PAGES_TREE}</pre>
      </article>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
  );
};

export default connect(null, messages)(Home);
