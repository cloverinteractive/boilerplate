import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Dismissable from 'components/Dismissable';
import { Message } from 'semantic-ui-react';
import Messages from 'main/components/Messages';

const defaultProps = {
  dismiss: sinon.spy(),
  messages: [],
}

context('Main', () => {
  describe('<Messages />', () => {
    it('renders', () => {
      const wrapper = mount(
        <Messages {...defaultProps} />
      );

      expect(wrapper).to.exist;
      expect(wrapper.find(Dismissable)).to.have.length(0);
    });

    describe('children', () => {
      context('automatically dismissable messages', () => {
        it('renders success alerts', () => {
          const props = {
            dismiss: sinon.spy(),
            messages: [
              {
              content: 'Some Notice',
              header: 'Yay! everything is awesome!',
              id: 'abc',
              type: 'success',
            },
            ],
          };

          const wrapper = mount(
            <Messages {...props} />
          );

          const dismissable = wrapper.find(Dismissable)

          expect(dismissable).to.have.length(1);
          expect(dismissable.find(Message)).to.have.length(1);
        });
      });

      it('renders errors', () => {
        const props = {
          dismiss: sinon.spy(),
          messages: [
            {
              content: 'Some Error',
              header: 'Something went wrong',
              id: 'abc',
              type: 'error',
            },
          ],
        };

        const wrapper = mount(
          <Messages {...props} />
        );

        expect(wrapper.find(Dismissable)).to.have.length(0);
        expect(wrapper.find(Message)).to.have.length(1);
      });

      it('renders warnings', () => {
        const props = {
          dismiss: sinon.spy(),
          messages: [
            {
              content: 'Some Warning',
              header: 'Something may have gone wrong',
              id: 'abc',
              type: 'warning',
            },
          ],
        };

        const wrapper = mount(
          <Messages {...props} />
        );

        expect(wrapper.find(Dismissable)).to.have.length(0);
        expect(wrapper.find(Message)).to.have.length(1);
      });
    });
  });
});
