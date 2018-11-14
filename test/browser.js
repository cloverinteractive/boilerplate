import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'ignore-styles';

configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body>body></html>html>', {
  beforeParse(window) {
    window.requestAnimationFrame = f => f;
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
