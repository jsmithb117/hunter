import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const penaltySlice = createSlice({
  name: 'penalty',
  initialState: initialState.penalty,
  reducers: {
    setLockdownTrue: (state, action) => {
      state.lockdown = true;
    },
    setLockdownFalse: (state, action) => {
      state.lockdown = false;
    },
    setVirusTrue: (state, action) => {
      state.virus = true;
    },
    setVirusFalse: (state, action) => {
      state.virus = false;
    },
    setPenalty: (state, action) => {
      state.penaltyCount = action.payload;
    }
  },
});

export const {
  setLockdownTrue,
  setLockdownFalse,
  setVirusTrue,
  setVirusFalse,
  setPenalty,
} = penaltySlice.actions;

// TODO: Move selectors from all slices to one file
export const selectLockdown = (state = initialState) => state.penalty.lockdown;
export const selectVirus = (state = initialState) => state.penalty.virus;
export const selectPenalty = (state = initialState) => state.penalty.penaltyCount;

export const lockdownPenalty = 10;
export const virusPenalty = 30;

export default penaltySlice.reducer;
