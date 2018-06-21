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

  constructor(props: Props) {
    super(props);

    this.dismiss = props.dismiss.bind(this, props.dismissArgs);
  }

  componentDidMount() {
    if (!this.dismiss) return null;

    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);

    return this.timer;
  }

  componentWillUnmount() {
    if (!this.timer) return null;

    return clearTimeout(this.timer);
  }

  dismiss: ?Function;

  timer: ?TimeoutID;

  render() {
    return this.props.children;
  }
}
