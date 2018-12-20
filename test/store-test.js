import { expect } from 'chai';
import { compose } from 'redux';

let history;
const browserHistoryKeys = [
    'action',
    'block',
    'createHref',
    'go',
    'goBack',
    'goForward',
    'length',
    'listen',
    'location',
    'push',
    'replace',
];

describe('store', () => {
    context('client rendering', () => {
        beforeEach(() => {
            global.window.devToolsExtension = compose;
            const store = require('store');

            history = store.history;
        });

        afterEach(() => {
            global.window.devToolsExtension = undefined;
            delete require.cache[require.resolve('store')];
        })

        it('sets history to browser history', () => {
            expect(window).to.exist;
            expect(history).to.have.all.keys(browserHistoryKeys);
        });
    });
})
