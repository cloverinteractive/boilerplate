import reducer from './messages';
import * as types from '../actions/types';

const message = {
  content: 'Some alert',
  header: 'Notice',
  id: 'abc',
  type: 'is-notice',
};

const emptyState = {
  messages: {
    entities: {},
    ids: [],
  },
};

const stateWithMessages = {
  messages: {
    entities: { abc: message },
    ids: ['abc'],
  },
};

describe('Messages reducer', () => {
  test(`${types.ADD_MESSAGE}`, () => {
    const action = {
      id: 'abc',
      message,
      type: types.ADD_MESSAGE,
    };

    expect(reducer(emptyState, action)).toEqual(stateWithMessages);
  });

  test(`${types.DISMISS_MESSAGE}`, () => {
    const action = {
      id: 'abc',
      type: types.DISMISS_MESSAGE,
    };

    expect(reducer(stateWithMessages, action)).toEqual(emptyState);
  });

  test('it ignores actions without payload invalid ids', () => {
    const action = {
      id: 'abc',
      type: types.ADD_MESSAGE,
    };

    expect(reducer(emptyState, action)).toEqual(emptyState);
  });

  test('it ignores unimplemented actions', () => {
    const action = { type: 'FAKE_ACTION' };
    expect(reducer(stateWithMessages, action)).toEqual(stateWithMessages);
  });
});
