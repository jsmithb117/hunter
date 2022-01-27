import { configureStore } from '@reduxjs/toolkit';

import boardReducer from '../features/board/boardSlice';
import countReducer from '../features/count/countSlice';
import difficultyReducer from '../features/difficulty/difficultySlice';
import timeReducer from '../features/time/timeSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    count: countReducer,
    difficulty: difficultyReducer,
    time: timeReducer,
  },
});

export default store;
