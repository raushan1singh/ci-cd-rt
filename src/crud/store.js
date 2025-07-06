import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../crud/counterSlice';

export const store = configureStore({
  reducer: {
    raushan: counterReducer,
  },
})