// @flow

import { combineReducers, type Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import type { Action as MainAction } from 'main/constants/types';

import * as main from './main';

type State = {
  [reducerName: string]: Reducer<any, any>,
} | {} | void;

// This should be a union of all your actions
type Action = MainAction;

const rootReducer: Reducer<State, Action> = combineReducers({
  [main.constants.NAME]: main.reducer,
  router: routerReducer,
});

export default rootReducer;
