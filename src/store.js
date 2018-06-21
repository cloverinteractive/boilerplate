import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './root-reducer';

const defaultState = window.INITIAL_STATE;

export const canLoadDevTools = () => {
  if (process.env.NODE_ENV !== 'production' && typeof window.devToolsExtension === 'function') {
    return window.devToolsExtension();
  }

  return compose;
};

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const enhancers = compose(applyMiddleware(routeMiddleware, thunkMiddleware), canLoadDevTools());
const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  enhancers,
);

export default store;
