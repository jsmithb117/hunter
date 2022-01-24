import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialState.display,
  reducers: {
    decrementCurrentHealth: (state) => {
      state.user.currentHealth -= 1;
    },
    decrementMinesDisplay: (state) => {
      state.minesDisplay -= 1;
    },
    incrementMinesDisplay: (state) => {
      state.minesDisplay += 1;
    },
    incrementTotalHealth: (state) => {
      state.user.totalHealth += 1;
      state.user.currentHealth += 1;
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
  decrementCurrentHealth,
  decrementMinesDisplay,
  incrementMinesDisplay,
  incrementTotalHealth,
  setDifficulty,
  setMinesDisplay,
} = displaySlice.actions;

export const selectCurrentHealth = (state = initialState) => state.display.currentHealth;
export const selectDifficulty = (state) => state.display.difficulty;
export const selectMinesDisplay = (state) => state.display.minesDisplay;
export const selectTotalHealth = (state = initialState) => state.display.totalHealth;

export default displaySlice.reducer;
