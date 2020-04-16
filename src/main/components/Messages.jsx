import * as React from 'react';
import Alert from 'main/components/Alert';
import styles from 'main/css/messages.css';
import Dismissable from 'components/Dismissable.bs';

class Messages extends React.PureComponent {
  buildMessage = (message) => {
    const color = { [message.type]: true };
    const { dismiss } = this.props;

    const onDismiss = () => dismiss(message.id);

    const Flash = (
      <Alert color={color} key={message.id} message={message} onDismiss={onDismiss} />
    );

    // Only dismiss automatically if successful
    if (message.type !== 'success') return Flash;

    return (
      <Dismissable key={message.id} onDismiss={onDismiss}>
        {Flash}
      </Dismissable>
    );
  }

  render() {
    const { messages } = this.props;
    const MessageList = messages.map((message) => this.buildMessage(message));

    return (
      <div className={styles.messages}>
        {MessageList}
      </div>
    );
  }
}

export default Messages;
