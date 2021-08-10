import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import serviceReducer, { initialState } from './serviceReducer';

import { init } from './actions/init';

const store = createStore(serviceReducer, initialState, applyMiddleware(promise));

store.dispatch(init());

export default store;
