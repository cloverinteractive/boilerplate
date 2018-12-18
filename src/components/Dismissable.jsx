import React from 'react';

export default class Dismissable extends React.PureComponent {
  static defaultProps = {
    dismissArgs: null,
    timeout: 3000,
  }

  componentDidMount() {
    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);

    return this.timer;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  dismiss = this.props.dismiss.bind(this, this.props.dismissArgs);

  render() {
    return this.props.children;
  }
}
