import { expect } from 'chai';
import { compose } from 'redux';

let canLoadDevTools, history;
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
            canLoadDevTools = store.canLoadDevTools;
        });

        afterEach(() => {
            global.window.devToolsExtension = undefined;
            delete require.cache[require.resolve('store')];
        })

        it('sets history to browser history', () => {
            expect(window).to.exist;
            expect(history).to.have.all.keys(browserHistoryKeys);
        });

        it('sets redux-devtools-extension if present', () => {
            expect(window.devToolsExtension).to.exist;
            expect(canLoadDevTools()).to.not.throw();
        })
    });
})
