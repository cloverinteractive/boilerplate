// @flow
/* eslint-disable react/sort-comp */

import React, { type Node } from 'react';

type Props = {
  children: Node,
  dismiss: Function,
  timeout: number,
};

export default class Dismissable extends React.PureComponent<Props> {
  static defaultProps = {
    timeout: 3000,
  };

  timer = null;

  componentDidMount() {
    const { dismiss, timeout } = this.props;
    this.timer = setTimeout(dismiss, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return this.props.children;
  }
}
