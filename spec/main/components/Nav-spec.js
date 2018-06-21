import first from 'lodash/first';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import store, { history } from 'store';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Menu } from 'semantic-ui-react';
import Nav from 'main/components/Nav';

let wrapper;

context('Main', () => {
  before(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );
  });

  describe('<Nav />', () => {
    it('renders', () => {
      expect(wrapper).to.exist;
    });

    describe('children', () => {
      it('renders a <Menu />', () => {
        expect(wrapper.find(Menu)).to.have.length(1);
      });

      it('renders Home <Menu.Item />', () => {
        const menu = wrapper.find(Menu);
        const items = menu.find(Menu.Item);

        expect(items).to.exist;
        expect(items.at(0).text()).to.eql('Home');
      });
    });
  });
});
