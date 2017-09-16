// @flow

import omit from 'lodash/omit';
import without from 'lodash/without';
import { combineReducers } from 'redux';
import * as types from 'main/constants/action-types';

import type { Action, State } from 'main/constants/types';

const initialState: State = {
  entities: {},
  ids: [],
};

const messages = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      const entities = { ...state.entities, [action.id]: action.message };
      const ids = [...state.ids, action.id];

      return { ...state, entities, ids };
    }

    case types.DISMISS_MESSAGE: {
      const entities = omit(state.entities, action.id);
      const ids = without(state.ids, action.id);

      return { ...state, entities, ids };
    }

    default:
      return state;
  }
};

export default combineReducers({ messages });
