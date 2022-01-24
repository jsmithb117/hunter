import { createSlice } from '@reduxjs/toolkit';
// import initialState from './initialState';
import initialState from '../initialState';
import zeroFinder from './zeroFinder';
import boardCreator from './boardCreator';

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState.board,
  reducers: {
    createNewBoard: (state, action) => {
      const { length, width } = action.payload;
      state.rows = boardCreator(action.payload);
      state.totalPiecesCount = length * width;
    },
    uncover: (state, action) => {
      const { row, col } = action.payload;
      state.rows[row][col].covered = false;
    },
    findZeroes: (state, action) => {
      const { row, col } = action.payload;
      state.rows = zeroFinder(state.rows, row, col);
    },
    toggleMarked: (state, action) => {
      const { row, col } = action.payload;
      state.rows[row][col].isMarkedAsMine = !state.rows[row][col].isMarkedAsMine;
    },
    setWin: (state) => {
      state.win = true;
    },
    setLoss: (state) => {
      state.loss = true;
    },
    incrementPiecesMarked: (state) => {
      state.rows.piecesMarkedAsMine += 1;
    },
    decrementPiecesMarked: (state) => {
      state.rows.piecesMarkedAsMine -= 1;
    },
  }
});

export const {
  toggleMarked,
  createNewBoard,
  setWin,
  setLoss,
  uncover,
  findZeroes } = boardSlice.actions;

export const selectBoard = (state = initialState) => {
  return state.board.rows
};
export const selectWin = (state = initialState) => {
  return state.board.win;
};
export const selectLoss = (state = initialState) => state.board.loss;
export const selectPiecesMarkedAsMine = (state = initialState) => state.board.piecesMarkedAsMine;

export default boardSlice.reducer;
