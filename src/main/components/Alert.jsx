// @flow

import React from 'react';
import { Message } from 'semantic-ui-react';
import type { Color, Message as MessageType } from 'main/constants/types';

type Props = {
  color: Color,
  message: MessageType,
  onDismiss: (messageId: string) => void,
};

export default class Alert extends React.PureComponent<Props> {
  onDismiss: Function = this.props.onDismiss.bind(this, this.props.message.id);

  render() {
    const { color, message } = this.props;

    return (
      <Message {...color} floating onDismiss={this.onDismiss}>
        <Message.Header>{message.header}</Message.Header>
        <p>{message.content}</p>
      </Message>
    );
  }
}
