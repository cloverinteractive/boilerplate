// @flow

import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import Dismissable from 'components/Dismissable';

import type { Message as MessageType } from 'main/constants/types';

type Props = {
  dismiss: Function,
  messages: Array<MessageType>,
};

const Messages = ({ messages, dismiss }: Props) => {
  const push = { marginBottom: 14 };
  const MessagesList = messages.map((message) => {
    const colors = { [message.type]: true };
    const handleDismiss = dismiss.bind(null, message.id);

    return (
      <Dismissable key={message.id} dismiss={handleDismiss}>
        <Message {...colors} floating onDismiss={handleDismiss}>
          <Message.Header>{ message.header }</Message.Header>
          <p>{ message.content }</p>
        </Message>
      </Dismissable>
    );
  });

  return (
    <Container>
      { MessagesList }
      <div style={push} />
    </Container>
  );
};

export default Messages;
