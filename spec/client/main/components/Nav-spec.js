import first from 'lodash/first';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Menu } from 'semantic-ui-react';
import Nav from 'main/components/Nav';

let wrapper;

context('Main', () => {
  before(() => {
    wrapper = mount(<Nav />);
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
