import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { history } from 'store';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'root-reducer';

import { Helmet } from 'react-helmet';
import { Button, Container, Header, Popup, Segment } from 'semantic-ui-react';
import Libraries from 'pages/components/Libraries';
import Home from 'pages/components/Home';

const initialState = {
  main: {
    messages: {
      entities: {},
      ids: [],
    },
  },
};

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, initialState, middleware);
let wrapper;
let component;

context('Pages', () => {
  before(() => {
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    component = wrapper.find(Home);
  });

  describe('<Home />', () => {
    it('renders', () => {
      expect(component).to.exist;
    });

    const getMessageCount = () => store.getState().main.messages.ids.length;

    describe('buttons', () => {
      it('creates messages by clicking alert buttons', () => {
        component.find(Button).forEach((button) => {
          const initialCount = getMessageCount();

          button.simulate('click');
          expect(getMessageCount()).to.eql(initialCount + 1)
        });
      });
    });

    describe('children', () => {
      it('has a title via <Helmet />', () => {
        expect(component.find(Helmet)).to.have.length(1);
      });

      it('has 3 <Header />', () => {
        expect(component.find(Header)).to.have.length(3);
      });

      it('has a <Container />', () => {
        expect(component.find(Container)).to.have.length(1)
      });

      it('has 6 code <Segment />', () => {
        expect(component.find(Segment)).to.have.length(6);
      });

      it('has 2 code <Segment />', () => {
        const code = component.find(Segment).find('code');
        expect(code).to.have.length(2);
      });

      it('has <Libraries />', () => {
        expect(component.find(Libraries)).to.have.length(1);
      });

      describe('<Button.Group />', () => {
        it('has 1 <Button.Group />', () => {
          expect(component.find(Button.Group)).to.have.length(1);
        });

        it('has 2 <Button.Or />', () => {
          expect(component.find(Button.Or)).to.have.length(2);
        });

        it('has 3 <Button />', () => {
          expect(component.find(Button)).to.have.length(3);
        });

        it('has 3 <Popup />', () => {
          expect(component.find(Popup)).to.have.length(3);
        });
      });
    });
  });
});

