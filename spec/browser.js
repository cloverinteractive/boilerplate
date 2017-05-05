import jsdom from 'jsdom';

const document = new jsdom.jsdom('<!doctype html><html><body></body>body></html>html>');
const window = document.defaultView;

global.document = document;
global.window = window;

Object.keys(window).forEach((property) => {
  if (!global[property]) {
    global[property] = window[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
