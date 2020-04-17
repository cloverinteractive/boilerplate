import * as React from 'react';
import { connect } from 'react-redux';

import removeMessage from 'redux/actions/messages';
import selector from 'redux/selectors/messages';
import Notification from './Notification.bs';

import styles from '../css/messages.css';

const Messages = ({ messages, dismiss }) => (
  <div className={styles.messages}>
    {messages.map(({ content, id, type: className }) => (
      <Notification key={id} className={className} onDismiss={() => dismiss(id)}>
        {content}
      </Notification>
    ))}
  </div>
);

const mapStateToProps = ({ messaging }) => ({
  messages: selector(messaging),
});

export default connect(mapStateToProps, { dismiss: removeMessage })(Messages);
