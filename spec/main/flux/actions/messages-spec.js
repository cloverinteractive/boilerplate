import last from 'lodash/last';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import removeMessage, { addNotice, addError, addWarning } from 'main/flux/actions/messages';
import * as types from 'main/constants/action-types';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);
const getState = {};

context('Main', () => {
  describe('Action creators', () => {
    it('adds errors', (done) => {
      const store = mockStore(getState);

      Promise.resolve(store.dispatch(addError('Error')))
      .then(() => last(store.getActions()))
      .then((action) => {
        expect(action).to.have.property('type', types.ADD_MESSAGE);
        expect(action).to.have.property('message');
      })
      .then(done)
      .catch(done);
    });

    it('adds warnings', (done) => {
      const store = mockStore(getState)

      Promise.resolve(store.dispatch(addWarning('Warning')))
      .then(() => last(store.getActions()))
      .then((action) => {
        expect(action).to.have.property('type', types.ADD_MESSAGE);
        expect(action).to.have.property('message');
      })
      .then(done)
      .catch(done)
    });

    it('adds notice', (done) => {
      const store = mockStore(getState)

      Promise.resolve(store.dispatch(addNotice('Notice')))
      .then(() => last(store.getActions()))
      .then((action) => {
        expect(action).to.have.property('type', types.ADD_MESSAGE);
        expect(action).to.have.property('message');
      })
      .then(done)
      .catch(done)
    });

    it('removes messages', (done) => {
      const id = 'abc';
      const store = mockStore(getState);

      Promise.resolve(store.dispatch(removeMessage(id)))
      .then(() => last(store.getActions()))
      .then((action) => {
        expect(action).to.have.property('type', types.DISMISS_MESSAGE);
        expect(action).to.have.property('id', id);
      })
      .then(done)
      .catch(done)
    });
  });
});
