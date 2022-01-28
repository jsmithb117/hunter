import { createSlice, createAction } from '@reduxjs/toolkit';
import initialState from '../initialState';

const createNewBoard = createAction('board/createNewBoard');

export const countSlice = createSlice({
  name: 'count',
  initialState: initialState.count,
  reducers: {
    uncover: (state, action) => {
      const { piece, zeroFinderResults } = action.payload;
      const { uncoveredPiecesCount, vaccinesCount } = zeroFinderResults;
      const { isMine, isMarkedAsMine } = piece;
      if (state.loss || state.win || isMarkedAsMine) {
        return state;
      }
      state.uncoveredPiecesCount += uncoveredPiecesCount;
      if (isMine) {
        state.currentHealth -= 1;
        state.mines -= 1;
      }
      if (state.currentHealth === 0) {
        state.loss = true;
      }
      if (state.totalPiecesCount === state.uncoveredPiecesCount + state.mines) {
        state.win = true;
      }
      state.currentHealth += vaccinesCount;
      state.totalHealth += vaccinesCount;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewBoard, (state, action) => {
        const { length, width, mines } = action.payload;
        state.totalPiecesCount = length * width;
        state.mines = mines;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const {
  uncover,
} = countSlice.actions;

export default countSlice.reducer;
