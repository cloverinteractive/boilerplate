import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { history } from 'store';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'root-reducer';

import Header from 'main/components/Header';
import { Message } from 'semantic-ui-react';
import Messages from 'main/components/Messages';
import Nav from 'main/components/Nav';
import { addError, addWarning } from 'main/flux/actions/messages';

const initialState = {
  main: {
    messages: {
      entities: {},
      ids: [],
    },
  },
};

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(routerMiddleware(history), thunkMiddleware),
);

let wrapper;
let component;

context('Main', () => {
  before(() => {
    wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>
    );

    component = wrapper.find('Header');
  });

  describe('<Header />', () => {
    it('renders', () => {
      expect(component).to.exist;
    });

    describe('children', () => {
      it('has a <Nav />', () => {
        const subject = wrapper.find(Nav);
        expect(subject).to.have.length(1);
      });

      it('has <Messages />', () => {
        const subject = wrapper.find(Messages);
        expect(subject).to.have.length(1);
      });
    });
  });

  describe('Flux', () => {
    it('Renders messages', (done) => {
      expect(wrapper.find(Message)).to.have.length(0);

      store.dispatch(addError('Some Error'));

      setTimeout(() => {
        wrapper.update();
        expect(wrapper.find(Message)).to.have.length(1);
        done();
      }, 10);
    });
  });
});
