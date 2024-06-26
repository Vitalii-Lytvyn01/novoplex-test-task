import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice';
import gameReducer from './features/gameListSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    searchReducer,
    gameReducer
  }
})

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

