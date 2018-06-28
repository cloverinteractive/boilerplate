/* eslint-disable no-underscore-dangle */

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './root-reducer';

export const history = createBrowserHistory();

const isDevelop = process.env.NODE_ENV !== 'production';
const initialState = window.__INITIAL_STATE__;
const composeEnhancer = (isDevelop && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
  )),
);

export default store;
