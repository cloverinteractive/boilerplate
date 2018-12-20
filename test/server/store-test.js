import { expect } from 'chai';
import store from 'server/store';

describe('store', () => {
  context('server rendering', () => {
    it('responds to getState', () => {
      expect(store.getState).to.exist;
    });

    it('returns a default state', () => {
      const state = store.getState();

      expect(state).to.exist
      expect(state).to.not.eql({});
    });

    it('responds to dispatch', () => {
      expect(store.dispatch).to.exist;
    });
  });
});