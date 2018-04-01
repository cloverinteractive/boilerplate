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
  constructor(props: Props) {
    super(props);

    this.onDismiss = props.onDismiss.bind(this, props.message.id);
  }

  onDismiss: ?Function = null;

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
