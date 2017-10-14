import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './root-reducer';

const defaultState = {};

const canLoadDevTools = () => {
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return (f => f);
};

export const history = typeof window === 'object' ? createHistory() : {};
const routeMiddleware = routerMiddleware(history);

const enhancers = compose(applyMiddleware(routeMiddleware, thunkMiddleware), canLoadDevTools());
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
