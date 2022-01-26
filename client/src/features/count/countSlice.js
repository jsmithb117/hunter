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

export const selectWin = (state = initialState) => state.count.win;
export const selectLoss = (state = initialState) => state.count.loss;
export const selectTotalPieces = (state = initialState) => state.count.totalPiecesCount;
export const selectUncoveredPieces = (state = initialState) => state.count.uncoveredPiecesCount;
export const selectCurrentHealth = (state = initialState) => state.count.currentHealth;
export const selectTotalHealth = (state = initialState) => state.count.totalHealth;
export const selectMines = (state = initialState) => state.count.mines;

export default countSlice.reducer;
