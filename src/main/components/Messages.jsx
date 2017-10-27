// @flow

import React from 'react';
import Dismissable from 'components/Dismissable';
import Alert from 'main/components/Alert';
import styles from 'main/css/messages.css';
import type { Message } from 'main/constants/types';

type Props = {
  dismiss: Function,
  messages: Array<Message>,
};

class Messages extends React.PureComponent<Props> {
  buildMessage = (message: Message) => {
    const color = { [message.type]: true };
    const onDismiss = this.props.dismiss.bind(null, message.id);

    const Flash = (
      <Alert colors={color} key={message.id} message={message} onDismiss={onDismiss} />
    );

    // Only dismiss automatically if successful
    if (message.type !== 'success') return Flash;

    return (
      <Dismissable key={message.id} dismiss={onDismiss}>
        {Flash}
      </Dismissable>
    );
  }

  render() {
    const { messages } = this.props;
    const MessageList = messages.map(message => this.buildMessage(message));

    return (
      <div className={styles.messages}>
        {MessageList}
      </div>
    );
  }
}

export default Messages;
