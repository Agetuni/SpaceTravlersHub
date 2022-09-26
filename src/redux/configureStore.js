import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
