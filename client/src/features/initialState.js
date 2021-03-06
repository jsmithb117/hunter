import { EmptyPiece } from './board/PieceCreators';

export const difficulty = {
  beginner: {
    label: 'beginner',
    length: 8,
    width: 8,
    mines: 8,
    vaccines: 3,
    lockdowns: 3,
  },
  intermediate: {
    label: 'intermediate',
    length: 13,
    width: 15,
    mines: 40,
    vaccines: 3,
    lockdowns: 3,
  },
  expert: {
    label: 'expert',
    length: 16,
    width: 30,
    mines: 99,
    vaccines: 1,
    lockdowns: 5,
  },
};

const newPiece = new EmptyPiece();
const initialState = {
  board: {
    markedPiecesCount: 0,
    rows: [[newPiece]],
  },
  count: {
    win: false,
    loss: false,
    totalPiecesCount: 0,
    uncoveredPiecesCount: 0,
    mines: 0,
    currentHealth: 3,
    totalHealth: 3,
  },
  difficulty: difficulty.beginner,
  time: 0,
  penalty: {
    penaltyCount: 0,
    lockdown: false,
    virus: false,
  },
};

export default initialState;
