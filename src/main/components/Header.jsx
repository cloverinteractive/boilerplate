// @flow

import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import Nav from './Nav';
import removeMessage from '../flux/actions/messages';
import selector from '../flux/selectors/messages';

import type { Message } from '../constants/types';

type Props = {
  dismiss: Function,
  messages: Array<Message>,
};

const Header = ({ messages, dismiss }: Props) => (
  <div>
    <Nav />
    <Messages messages={messages} dismiss={dismiss} />
  </div>
);

const mapStateToProps = ({ main }) => ({
  messages: selector(main),
});

export default connect(mapStateToProps, { dismiss: removeMessage })(Header);
