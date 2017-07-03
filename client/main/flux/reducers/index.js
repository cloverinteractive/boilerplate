import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../../constants/action-types';

const initialState = {
  entities: {},
  ids: [],
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      const entities = { ...state.entities, [action.id]: action.message };
      const ids = [...state.ids, action.id];

      return { ...state, entities, ids };
    }

    case types.DISMISS_MESSAGE: {
      const entities = _.omit(state.entities, action.id);
      const ids = _.without(state.ids, action.id);

      return { ...state, entities, ids };
    }

    default:
      return state;
  }
};

export default combineReducers({ messages });
