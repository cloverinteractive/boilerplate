import React from 'react';
import PropTypes from 'prop-types';
import { Container, Message } from 'semantic-ui-react';
import Dismissable from '../../components/Dismissable';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  dismiss: PropTypes.func.isRequired,
};

const Messages = ({ messages, dismiss }) => {
  const push = { marginBottom: 14 };
  const MessagesList = messages.map((message) => {
    const colors = { [message.type]: true };
    const handleDismiss = dismiss.bind(null, message.id);

    return (
      <Dismissable key={message.id} dismiss={handleDismiss}>
        <Message {...colors} floating onDismiss={handleDismiss}>
          <Message.Header>{ message.heafer }</Message.Header>
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

Messages.propTypes = propTypes;

export default Messages;
