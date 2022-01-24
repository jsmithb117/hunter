import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardSlice';
import displayReducer from '../features/display/displaySlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    display: displayReducer,
  },
});
