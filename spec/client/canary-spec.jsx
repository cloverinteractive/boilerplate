import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Canary from 'components/Example';

describe('Canary test', () => {
  it("won't raise when Elm is present", () => {
    expect(() => mount(<Canary />)).to.not.throw()
  })

  it('renders navigateable content', () => {
    const wrapper = mount(<Canary />);
    const heading = wrapper.find('h1');

    expect(heading.text()).to.eql('Elm goes below');
  });
});
