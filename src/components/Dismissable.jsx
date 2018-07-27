// @flow

import React from 'react';

type Props = {
  children: React$Node,
  dismiss: Function,
  dismissArgs?: any,
  timeout: number,
};

export default class Dismissable extends React.PureComponent<Props> {
  static defaultProps = {
    dismissArgs: null,
    timeout: 3000,
  };

  componentDidMount() {
    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);

    return this.timer;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  timer: TimeoutID;

  dismiss: Function = this.props.dismiss.bind(this, this.props.dismissArgs);

  render() {
    return this.props.children;
  }
}
