import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const difficultySlice = createSlice({
  name: 'difficulty',
  initialState: initialState.difficulty,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setDifficulty } = difficultySlice.actions;

export default difficultySlice.reducer;
