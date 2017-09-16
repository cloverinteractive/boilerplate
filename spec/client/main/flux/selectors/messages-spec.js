import { expect } from 'chai';
import selector from 'main/flux/selectors/messages';

const message = {
  content: 'Some alert',
  header: 'Notice',
  id: 'abc',
  type: 'notice',
};

const store = {
  main: {
    messages: {
      ids: ['abc'],
      entities: {
        'abc': message,
      },
    },
  },
}

context('Main', () => {
  describe('Messages Selector', () => {
    it('returns an array of messages', () => {
      expect(selector(store.main)).to.include(message);
    });
  });
});
