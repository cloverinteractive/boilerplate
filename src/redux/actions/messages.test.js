import last from 'lodash/last';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import removeMessage, { addError, addNotice, addWarning } from './messages';
import * as types from './types';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Messages Action creators', () => {
  test('adds errors', () => {
    const store = mockStore(initialState);

    store.dispatch(addError('Error'));

    const action = last(store.getActions());

    expect(action.type).toBe(types.ADD_MESSAGE);
    expect(Object.keys(action)).toContain('message');
  });

  test('adds notice', () => {
    const store = mockStore(initialState);

    store.dispatch(addNotice('Success'));

    const action = last(store.getActions());

    expect(action.type).toBe(types.ADD_MESSAGE);
    expect(Object.keys(action)).toContain('message');
  });

  test('adds warning', () => {
    const store = mockStore(initialState);

    store.dispatch(addWarning('Warning'));

    const action = last(store.getActions());

    expect(action.type).toBe(types.ADD_MESSAGE);
    expect(Object.keys(action)).toContain('message');
  });

  test('removes message', () => {
    const id = 'abc';
    const store = mockStore(initialState);

    store.dispatch(removeMessage(id));

    const action = last(store.getActions());

    expect(action).toEqual({ id, type: types.DISMISS_MESSAGE });
  });
});
