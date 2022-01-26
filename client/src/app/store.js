import { configureStore } from '@reduxjs/toolkit';

import boardReducer from '../features/board/boardSlice';
import countReducer from '../features/count/countSlice';
import difficultyReducer from '../features/difficulty/difficultySlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    count: countReducer,
    difficulty: difficultyReducer,
  },
});

export default store;
