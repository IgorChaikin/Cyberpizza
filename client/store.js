import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './service/serviceSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});

export default store;
