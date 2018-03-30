// @flow

import { combineReducers, type Reducer } from 'redux';
import { routerReducer, type RouterReducer } from 'react-router-redux';
import type { Action as MainAction } from 'main/constants/types';

import * as main from './main';

type Store = {
  [reducerName: string]: Reducer<any, any>,
  router: RouterReducer,
};

// This should be a union of all your actions
type Action = MainAction;

const rootReducer: Reducer<Store, Action> = combineReducers({
  [main.constants.NAME]: main.reducer,
  router: routerReducer,
});

export default rootReducer;
