import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Messages from './Messages';
import Notification from './Notification.bs';
import store from '../redux/store';
import { addError } from '../redux/actions/messages';


describe('Messages container', () => {
  test('It renders messages wrapper when empty', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    expect(wrapper.find(Notification)).toHaveLength(0);
  });

  test('It displays messages as they are created', async (done) => {
    await store.dispatch(addError('This is an error'));

    const wrapper = mount(
      <Provider store={store}>
        <Messages />
      </Provider>,
    );

    expect(wrapper.find(Notification)).toHaveLength(1);
    done();
  });
});
