import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Canary from 'components/Example';

describe('Canary test', () => {
  it('renders', () => {
    const wrapper = mount(<Canary />);
    const heading = wrapper.find('h1');

    expect(heading.text()).to.eql('Hello world');
  });
});
