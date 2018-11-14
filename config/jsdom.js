import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'ignore-styles';

configure({ adapter: new Adapter() });

// Storage Mock
const storageMock = () => {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
};

const jsdom = new JSDOM('<!doctype html><html><body></body>body></html>html>', {
  beforeParse(window) {
    window.requestAnimationFrame = f => f;
    window.localStorage = storageMock();
  }
});
const { window } = jsdom;

global.document = window.document;
global.window = window;
global.HTMLElement = window.HTMLElement;

Object.keys(window).forEach((property) => {
  if (!global[property]) {
    global[property] = window[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
