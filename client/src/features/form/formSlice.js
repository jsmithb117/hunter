import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    incrementMinesDisplay: (state) => {
      state.minesDisplay += 1;
    },
    decrementMinesDisplay: (state) => {
      state.minesDisplay -= 1;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setMinesDisplay: (state, action) => {
      state.minesDisplay = action.payload;
    },
  },
});

export const {
  incrementMinesDisplay,
  decrementMinesDisplay,
  setDifficulty,
  setMinesDisplay,
} = formSlice.actions;

export const selectDifficulty = (state) => state.form.difficulty;
export const selectMinesDisplay = (state) => state.form.minesDisplay;

export default formSlice.reducer;
