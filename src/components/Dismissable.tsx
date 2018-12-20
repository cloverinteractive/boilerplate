import React from 'react';

interface Props {
  dismissArgs?: any;
  dismiss?: () => void;
  timeout: number;
}

export default class Dismissable extends React.PureComponent<Props> {
  public static defaultProps: Props = {
    dismissArgs: null,
    timeout: 3000,
  };

  private timer: any = null;

  private dismiss = this.props.dismiss.bind(this, this.props.dismissArgs);

  public componentDidMount() {
    const { timeout } = this.props;
    this.timer = setTimeout(this.dismiss, timeout);

    return this.timer;
  }

  public componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  public render() {
    return this.props.children;
  }
}
