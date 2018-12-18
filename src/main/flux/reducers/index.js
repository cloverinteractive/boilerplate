import omit from 'lodash/omit';
import without from 'lodash/without';
import { combineReducers } from 'redux';
import * as types from 'main/constants/action-types';

const initialState = {
  entities: {},
  ids: [],
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      if (!action.message) return state;

      const entities = { ...state.entities, [action.id]: action.message };
      const ids = [...state.ids, action.id];

      return {
        ...state,
        entities,
        ids,
      };
    }

    case types.DISMISS_MESSAGE: {
      const entities = omit(state.entities, action.id);
      const ids = without(state.ids, action.id);

      return {
        ...state,
        entities,
        ids,
      };
    }

    default:
      return state;
  }
};

const reducer = combineReducers({ messages });

export default reducer;

