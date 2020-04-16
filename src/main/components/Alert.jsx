import * as React from 'react';
import { Message } from 'semantic-ui-react';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
const Alert = ({ color, message, onDismiss }) => (
  <Message {...color} floating onDismiss={onDismiss.bind(null, message.id)}>
    <Message.Header>{message.header}</Message.Header>
    <p>{message.content}</p>
  </Message>
);

export default Alert;
