import initial from './initialState';

// board
export const selectRows = (state = initial) => state.board.rows;
export const selectMarkedPiecesCount = (state = initial) => state.board.markedPiecesCount;

// count
export const selectWin = (state = initial) => state.count.win;
export const selectLoss = (state = initial) => state.count.loss;
export const selectTotalPieces = (state = initial) => state.count.totalPiecesCount;
export const selectUncoveredPieces = (state = initial) => state.count.uncoveredPiecesCount;
export const selectCurrentHealth = (state = initial) => state.count.currentHealth;
export const selectTotalHealth = (state = initial) => state.count.totalHealth;
export const selectMines = (state = initial) => state.count.mines;

// difficulty
export const selectDifficulty = (state) => (state.difficulty);

// penalty
export const selectLockdown = (state = initial) => state.penalty.lockdown;
export const selectVirus = (state = initial) => state.penalty.virus;
export const selectPenalty = (state = initial) => state.penalty.penaltyCount;

// time
export const selectTime = (state = initial) => state.time;
