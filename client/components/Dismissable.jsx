import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  dismiss: PropTypes.func.isRequired,
  timeout: PropTypes.number,
};

class Dismissable extends React.PureComponent {
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


Dismissable.defaultProps = {
  timeout: 3000,
};

Dismissable.propTypes = propTypes;

export default Dismissable;
