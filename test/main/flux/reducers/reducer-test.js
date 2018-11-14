import { expect } from 'chai';
import reducer from 'main/flux/reducers';
import * as types from 'main/constants/action-types';

const message = {
  content: 'Some alert',
  header: 'Notice',
  id: 'abc',
  type: 'notice',
};

const blankSlate = {
  messages: {
    entities: {},
    ids: [],
  },
};

const withMessages = {
  messages: {
    entities: { 'abc': message },
    ids: ['abc'],
  },
};

context('Main', () => {
  describe('Reducer', () => {
    context('Implemented actions', () => {
      it(`${types.ADD_MESSAGE}`, () => {
        const action = {
          id: 'abc',
          message,
          type: types.ADD_MESSAGE,
        };

        expect(reducer(blankSlate, action)).to.eql(withMessages);
      });

      it(`${types.DISMISS_MESSAGE}`, () => {
        const action = {
          id: 'abc',
          type: types.DISMISS_MESSAGE,
        };

        expect(reducer(withMessages, action)).to.eql(blankSlate);
      });
    });

    context('Fault tolerance', () => {
      it(`Accounts for lack of message in ${types.ADD_MESSAGE}`, () => {
        const action = {
          id: 'abc',
          type: types.ADD_MESSAGE,
        };

        expect(reducer(blankSlate, action)).to.eql(blankSlate);
      })
    });

    context('Not implemented actions', () => {
      it('Return valid state', () => {
        const action = { type: "FAKE_ACTION" };
        expect(reducer(withMessages, action)).to.eql(withMessages);
      });
    });
  });
});
