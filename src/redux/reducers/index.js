import { combineReducers } from 'redux';
import messaging from './messages';

const rootReducer = combineReducers({
  messaging,
});

export default rootReducer;
