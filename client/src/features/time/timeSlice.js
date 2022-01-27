import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const timeSlice = createSlice({
  name: 'time',
  initialState: initialState.time,
  reducers: {
    setTime: (state, action) => action.payload,
  },
  // may need an extraReducer for resetting the board
});

export const { setTime } = timeSlice.actions;

export const selectTime = (state = initialState) => state.time;

export default timeSlice.reducer;
