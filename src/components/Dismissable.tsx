import React from 'react';

type Props = {
  dismissArgs: any,
  dismiss: Function,
  timeout: number,
};

export default class Dismissable extends React.PureComponent<Props> {
  static defaultProps = {
    dismissArgs: null,
    timeout: 3000,
  }

  timer: any = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);

    return this.timer;
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  dismiss = this.props.dismiss.bind(this, this.props.dismissArgs);

  render() {
    return this.props.children;
  }
}
