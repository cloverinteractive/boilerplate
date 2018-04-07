import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'root-reducer';

const defaultState = {};
const enhancers = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
