import React from 'react';
import { Message } from 'semantic-ui-react';

export default class Alert extends React.PureComponent {
  onDismiss = this.props.onDismiss.bind(this, this.props.message.id);

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
