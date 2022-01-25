import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import zeroFinder from './zeroFinder';
import boardCreator from './boardCreator';

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState.board,
  reducers: {
    createNewBoard: (state, action) => {
      const { length, width, mines } = action.payload;
      state.rows = boardCreator(action.payload);
      state.totalPiecesCount = length * width;
      state.mines = mines;
    },
    uncover: (state, action) => {
      const { row, col, isMine, isMarkedAsMine, covered } = action.payload;
      const piece = state.rows[row][col];

      if (state.isLoss || piece.isMarkedAsMine) {
        return state;
      } else if (piece.isMine) {
        state.loss = true;
      } else if (!isMine && !isMarkedAsMine && covered) {
        const { rows, uncoveredPiecesCount } = zeroFinder(state.rows, row, col);
        state.rows = rows;
        state.uncoveredPiecesCount += uncoveredPiecesCount;
      }
      if (state.totalPiecesCount === state.uncoveredPiecesCount + state.mines) {
        state.win = true;
      }
    },
    toggleMarked: (state, action) => {
      const { row, col, covered, isMarkedAsMine } = action.payload;
      const piece = state.rows[row][col];
      if (state.loss) {
        return state;
      } else if (isMarkedAsMine) {
        piece.isMarkedAsMine = false;
        state.markedPiecesCount -= 1;
      } else if (!isMarkedAsMine && covered) {
        piece.isMarkedAsMine = true;
        state.markedPiecesCount += 1;
      }
    },
  }
});

export const {
  toggleMarked,
  createNewBoard,
  uncover,
} = boardSlice.actions;

export const selectBoard = (state = initialState) => {
  return state.board.rows
};
export const selectWin = (state = initialState) => {
  return state.board.win;
};
export const selectLoss = (state = initialState) => state.board.loss;
export const selectMarkedPiecesCount = (state = initialState) => state.board.mines - state.board.markedPiecesCount;
export const selectTotalPieces = (state = initialState) => state.board.totalPiecesCount;
export const selectUncoveredPieces = (state = initialState) => state.board.uncoveredPiecesCount;

export default boardSlice.reducer;
