import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Container, Header } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Error404 from 'pages/components/Error404';

let wrapper;

context('Pages', () => {
  describe('<Error404 />', () => {
    before(() => {
      wrapper = mount(<Error404 />);
    });

    it('renders', () => {
      expect(wrapper).to.exist;
    });

    describe('children', () => {
      it('has a <Container />', () => {
        const container = wrapper.find(Container);

        expect(container).to.have.length(1);
        expect(container.props()).to.have.property('text', true);
      });

      it('has a <Helmet />', () => {
        expect(wrapper.find(Helmet)).to.have.length(1);
      });

      it('has a <Header />', () => {
        const heading = wrapper.find(Header);

        expect(heading).to.have.length(1);
        expect(heading.text()).to.eql('Page not found');
      });

      it('has a <p />', () => {
        const p = wrapper.find('p');

        expect(p).to.have.length(1);
        expect(p.text()).to.eql('The page you we\'re looking for does not exist.');
      });
    });
  });
});
