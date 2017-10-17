import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Layout from 'components/Layout';

let wrapper;

describe('<Layout />', () => {
  before(() => {
    wrapper = shallow(
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    );
  });

  it('renders', () => {
    expect(wrapper).to.exist;
  });

  it('renders children', () => {
    const child = wrapper.find('h1');

    expect(child).to.have.length(1);
    expect(child.text()).to.eql('Hello world');
  });

  it('renders main stylesheet', () => {
    const style = wrapper.find('link');

    expect(style).to.have.length(1);
    expect(style.props().href).to.eql('/style.css');
  });

  it('renders javascript bundle', () => {
    const script = wrapper.find('script');

    expect(script).to.have.length(1);
    expect(script.props().src).to.eql('/bundle.js');
  });
});
