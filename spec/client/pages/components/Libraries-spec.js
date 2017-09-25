import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import libraries from 'pages/constants/libraries';
import Libraries, { Library } from 'pages/components/Libraries';

let wrapper;

context('Pages', () => {
  describe('<Libraries />', () => {
    before(() => {
      wrapper = mount(
        <Libraries libraries={libraries} />
      )
    });

    it('renders', () => {
      expect(wrapper).to.exist;
    });

    describe('children', () => {
      it('is a <ul />', () => {
        expect(wrapper.find('ul')).to.have.length(1);
      });

      it('has many <Library />', () => {
        expect(wrapper.find(Library)).to.have.length(libraries.length);
        expect(wrapper.find('li')).to.have.length(libraries.length);
      });

      libraries.map((library, position) => {
        it(`has a link for ${library.library} - ${library.description}`, () => {
          const li = wrapper.find('li');

          expect(li.at(position).find('a').text()).to.eql(library.library);
          expect(li.at(position).find('em').text()).to.eql(library.description);
        });
      });
    });
  });
});
