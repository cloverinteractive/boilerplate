import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Container, Header } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import About from 'pages/components/About';

let wrapper;

context('Pages', () => {
  before(() => {
    wrapper = mount(<About />);
  });

  describe('<About />', () => {
    it('renders', () => {
      expect(wrapper).to.exist;
    });

    describe('children', () => {
      it('has a <Helmet />', () => {
        expect(wrapper.find(Helmet)).to.have.length(1);
      });

      it('has a <Container />', () => {
        expect(wrapper.find(Container)).to.have.length(1);
      });

      it('has a <Header />', () => {
        const heading = wrapper.find(Header);
        expect(heading).to.have.length(1);
        expect(heading.text()).to.eql('Made with love <3!')
      });

      it('has <p />', () => {
        expect(wrapper.find('p')).to.have.length(2);
      });
    });
  });
});
