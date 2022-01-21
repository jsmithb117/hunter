import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    incrementTotalHealth: (state) => {
      state.user.totalHealth += 1;
      state.user.currentHealth += 1;
    },
    decrementCurrentHealth: (state) => {
      state.user.currentHealth -= 1;
    }
  },
});

export const {
  setUser,
  incrementTotalHealth,
  decrementCurrentHealth } = userSlice.actions;

  export const selectCurrentHealth = (state) => state.user.currentHealth;
  export const selectTotalHealth = (state) => state.user.totalHealth;

  export default userSlice.reducer;
