import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import * as main from './main';

export default combineReducers({
  [main.constants.NAME]: main.reducer,
  router,
});
