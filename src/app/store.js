import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import {blogApi} from '../services/blog'
export const store = configureStore({
  reducer: {
   
    [blogApi.reducerPath]: blogApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(blogApi.middleware),
});


setupListeners(store.dispatch)
