
import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import Nav from './Nav';
import removeMessage from '../flux/actions/messages';
import selector from '../flux/selectors/messages';

const Header = ({ messages, dismiss }) => (
  <div>
    <Nav />
    <Messages messages={messages} dismiss={dismiss} />
  </div>
);

const mapStateToProps = ({ main }) => ({
  messages: selector(main),
});

export default connect(mapStateToProps, { dismiss: removeMessage })(Header);
