// @flow

import React, { type Node } from 'react';
import { Message } from 'semantic-ui-react';
import type { Colors, Message as MessageType } from 'main/constants/types';

type Props = {
  colors: Colors,
  message: MessageType,
  onDismiss: Function,
};

const Alert = ({ colors, message, onDismiss }: Props): Node => (
  <Message {...colors} floating onDismiss={onDismiss}>
    <Message.Header>{message.header}</Message.Header>
    <p>{message.content}</p>
  </Message>
);

export default Alert;
