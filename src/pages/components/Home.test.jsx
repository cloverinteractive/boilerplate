import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import Home from './Home';
import Libraries from './Libraries';
import store from '../../redux/store';

jest.mock('uuid/v1', () => jest.fn((_, increment) => `mocked-random-uuid-${increment}`));

describe('<Home />', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it renders libraries', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(wrapper.find(Libraries)).toHaveLength(1);
  });

  test('it clicks buttons', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    act(() => {
      wrapper.find('button.is-success').simulate('click');
      wrapper.find('button.is-warning').simulate('click');
      wrapper.find('button.is-danger').simulate('click');
    });
  });
});
