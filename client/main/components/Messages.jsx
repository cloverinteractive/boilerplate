// @flow

import React from 'react';
import { Message } from 'semantic-ui-react';
import Dismissable from 'components/Dismissable';

import type { Message as MessageType } from 'main/constants/types';

type Props = {
  dismiss: Function,
  messages: Array<MessageType>,
};

class Messages extends React.PureComponent<Props> {
  buildMessage = (message: MessageType) => {
    const color = { [message.type]: true };
    const onDismiss = this.props.dismiss.bind(null, message.id);

    const Alert = (
      <Message {...color} key={message.id} floating onDismiss={onDismiss}>
        <Message.Header>{ message.header }</Message.Header>
        <p>{ message.content }</p>
      </Message>
    );

    // Only dismiss automatically if successful
    if (message.type !== 'success') return Alert;

    return (
      <Dismissable key={message.id} dismiss={onDismiss}>
        { Alert }
      </Dismissable>
    );
  }

  render() {
    const { messages } = this.props;
    const MessageList = messages.map(message => this.buildMessage(message));

    return (
      <div className="messages">
        { MessageList }
      </div>
    );
  }
}

export default Messages;
