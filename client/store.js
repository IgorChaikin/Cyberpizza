import { configureStore } from '@reduxjs/toolkit';
import serviceReducer, { init } from './service/serviceSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});

store.dispatch(init());

export default store;
