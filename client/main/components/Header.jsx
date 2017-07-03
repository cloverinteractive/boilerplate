import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from './Messages';
import Nav from './Nav';
import removeMessage from '../flux/actions/messages';
import selector from '../flux/selectors/messages';

const propTypes = {
  dismiss: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

const Header = ({ messages, dismiss }) => (
  <div>
    <Nav />
    <Messages messages={messages} dismiss={dismiss} />
  </div>
);

Header.propTypes = propTypes;

const mapStateToProps = ({ main }) => ({
  messages: selector(main),
});

export default connect(mapStateToProps, { dismiss: removeMessage })(Header);
