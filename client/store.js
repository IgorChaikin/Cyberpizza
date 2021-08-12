import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import serviceReducer, { initialState } from './serviceReducer';

const store = createStore(serviceReducer, initialState, applyMiddleware(promise));

export default store;
