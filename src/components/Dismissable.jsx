// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node,
  dismiss: Function,
  dismissArgs?: any,
  timeout: number,
};

export default class Dismissable extends React.PureComponent<Props> {
  static defaultProps = {
    timeout: 3000,
  };

  constructor(props: Props) {
    super(props);

    this.dismiss = props.dismiss.bind(this, props.dismissArgs);
  }

  componentDidMount() {
    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  dismiss = null;

  timer = null;

  render() {
    return this.props.children;
  }
}
