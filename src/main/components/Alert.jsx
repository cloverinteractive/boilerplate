// @flow

import React from 'react';
import { Message } from 'semantic-ui-react';
import type { Colors, Message as MessageType } from 'main/constants/types';

type Props = {
  colors: Colors,
  message: MessageType,
  onDismiss: Function,
};

export default class Alert extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onDismiss = props.onDismiss.bind(this, props.message.id);
  }

  onDismiss: ?Function = null;

  render() {
    const { colors, message } = this.props;

    return (
      <Message {...colors} floating onDismiss={this.onDismiss}>
        <Message.Header>{message.header}</Message.Header>
        <p>{message.content}</p>
      </Message>
    );
  }
}
