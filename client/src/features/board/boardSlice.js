import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import zeroFinder from './zeroFinder';
import boardCreator from './boardCreator';

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createNewBoard: (state, action) => {
      state.board = boardCreator(action.payload.difficultyObject);
    },
    toggleCovered: (state, row, col) => {
      state.board[row][col].toggleCovered();
    },
    findZeroes: (state, row, col) => {
      state.board = zeroFinder(state.board, row, col);
    },
    toggleMarked: (state, action) => {
      const { row, col } = action.payload;
      state.board[row][col].toggleMarked();
    },
    setWin: (state) => {
      state.board.win = true;
    },
    setLoss: (state) => {
      state.board.loss = true;
    },
    incrementPiecesMarked: (state) => {
      state.board.piecesMarkedAsMine += 1;
    },
    decrementPiecesMarked: (state) => {
      state.board.piecesMarkedAsMine -= 1;
    },
  }
});

export const {
  toggleMarked,
  createNewBoard,
  setWin,
  setLoss,
  toggleCovered,
  findZeroes } = boardSlice.actions;

export const selectBoard = (state) => state.board.board;
export const selectWin = (state) => state.board.win;
export const selectLoss = (state) => state.board.loss;
export const selectPiecesMarkedAsMine = (state) => state.board.piecesMarkedAsMine;

export default boardSlice.reducer;
