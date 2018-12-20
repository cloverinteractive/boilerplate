import { combineReducers } from 'redux';
import * as main from './main';

const rootReducer = combineReducers({
  [main.constants.NAME]: main.reducer,
});

export default rootReducer;
