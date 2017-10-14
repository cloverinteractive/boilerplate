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
        before(() => {
            global.window.devToolsExtension = compose;
            const store = require('store');

            history = store.history;
            canLoadDevTools = store.canLoadDevTools;
        });

        after(() => {
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

    context('server rendering', () => {
        before(() => {
            global.window = undefined;
            const store = require('store');

            history = store.history;
            canLoadDevTools = store.canLoadDevTools();
        });

        after(() => {
            global.window = global.document.defaultView
            delete require.cache[require.resolve('store')];
        })

        it('sets history blank when rendered from server', () => {
            expect(window).to.not.exist;
            expect(history).to.eql({});
        });

        it('safely ignores redux-devtools-extension when not present', () => {
            expect(window).to.not.exist;
            expect(canLoadDevTools()).to.not.throw();
        })
    });
})