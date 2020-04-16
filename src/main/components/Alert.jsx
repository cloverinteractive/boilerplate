import * as React from 'react';
import { Message } from 'semantic-ui-react';

/* eslint-disable react/jsx-props-no-spreading */
const Alert = ({ color, message, onDismiss }) => (
  <Message {...color} floating onDismiss={onDismiss}>
    <Message.Header>{message.header}</Message.Header>
    <p>{message.content}</p>
  </Message>
);

export default Alert;
