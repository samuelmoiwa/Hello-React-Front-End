import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';

const store = configureStore({

  reducer: greetingReducer,
});

export default store;
