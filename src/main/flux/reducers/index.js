// @flow

import omit from 'lodash/omit';
import without from 'lodash/without';
import { combineReducers, type Reducer } from 'redux';
import * as types from 'main/constants/action-types';

import type { Action, State } from 'main/constants/types';

const initialState: State = {
  entities: {},
  ids: [],
};

const messages: Reducer<State, Action> = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      if (!action.message) return state;

      const entities = { ...state.entities, [action.id]: action.message };
      const ids: Array<string> = [...state.ids, action.id];

      return { ...state, entities, ids };
    }

    case types.DISMISS_MESSAGE: {
      const entities: State = omit(state.entities, action.id);
      const ids: Array<string> = without(state.ids, action.id);

      return { ...state, entities, ids };
    }

    default:
      return state;
  }
};

const reducer: Reducer<{ messages: State }, Action> = combineReducers({ messages });

export default reducer;

