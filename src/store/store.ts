import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cartReducer } from './root-reducer';

const rootReducer = combineReducers({
  cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
