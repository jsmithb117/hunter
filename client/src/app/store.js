import { configureStore } from '@reduxjs/toolkit';

import boardReducer from '../features/board/boardSlice';
import countReducer from '../features/count/countSlice';
import difficultyReducer from '../features/difficulty/difficultySlice';
import timeReducer from '../features/time/timeSlice';
import penaltyReducer from '../features/penalty/penaltySlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    count: countReducer,
    difficulty: difficultyReducer,
    time: timeReducer,
    penalty: penaltyReducer,
  },
});

export default store;
