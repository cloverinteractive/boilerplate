import selector from './messages';

const message = {
  content: 'Some alert',
  header: 'Notice',
  id: 'abc',
  type: 'notice',
};

const store = {
  messaging: {
    messages: {
      ids: ['abc'],
      entities: {
        abc: message,
      },
    },
  },
};

describe('Messages selector', () => {
  test('it returns an array of messages', () => {
    expect(selector(store.messaging)).toContain(message);
  });
});
