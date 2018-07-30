import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon, { stub } from 'sinon';
import Dismissable from 'components/Dismissable';

const dismiss = sinon.spy();

describe('<Dismissable />', () => {
  it('renders', () => {
    const wrapper = mount(
      <Dismissable dismiss={dismiss}>
        <h1>Dismissable Heading</h1>
      </Dismissable>
    );

    const heading = wrapper.find('h1');
    expect(heading.text()).to.eql('Dismissable Heading');
  })

  it('dismisses itself', (done) => {
    const wrapper = mount(
      <Dismissable dismiss={dismiss} timeout={10}>
        <h1>Dismissable Heading</h1>
      </Dismissable>
    );

    setTimeout(() => {
      wrapper.unmount();
      expect(dismiss.callCount).to.eql(1);
      done();
    }, 10);
  });
});
