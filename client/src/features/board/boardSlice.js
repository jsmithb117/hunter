import { createSlice, createAction } from '@reduxjs/toolkit';
import initialState from '../initialState';

const uncover = createAction('count/uncover');

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState.board,
  reducers: {
    createNewBoard: (state, action) => {
      state.rows = action.payload.rows;
    },
    toggleMarked: (state, action) => {
      const { row, col, covered, isMarkedAsMine } = action.payload;
      const piece = state.rows[row][col];
      if (state.loss) {
        return state;
      }
      if (isMarkedAsMine) {
        piece.isMarkedAsMine = false;
        state.markedPiecesCount -= 1;
      }
      if (!isMarkedAsMine && covered) {
        piece.isMarkedAsMine = true;
        state.markedPiecesCount += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uncover, (state, action) => {
        const { zeroFinderResults } = action.payload;
        const { rows } = zeroFinderResults;
        state.rows = rows;
      })
      .addDefaultCase((state, action) => {});
  }
});

export const {
  toggleMarked,
  createNewBoard,
} = boardSlice.actions;

export const selectRows = (state = initialState) => {
  return state.board.rows
};

export const selectMarkedPiecesCount = (state = initialState) => {
  return state.board.markedPiecesCount;
}

export default boardSlice.reducer;
