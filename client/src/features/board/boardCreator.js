import {
  EmptyPiece,
  MinePiece,
  VaccinePiece,
  LockdownPiece,
} from './PieceCreators';
import rowColGenerator from './rowColGenerator';
import calculateValues from './calculateValues';

const boardCreator = (difficulty) => {
  const { length, width, mines, vaccines, lockdowns } = difficulty;
  const rowColGen = rowColGenerator(length, width);

  const board = Array.from({ length }, () =>
  (Array.from({ length: width }, () => {
    const { row, col } = rowColGen.next().value;
    return EmptyPiece(row, col);
  })));

  let minesCount = 0;
  let vaccinesCount = 0;
  let lockdownsCount = 0;

  while (minesCount < mines) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine) {
      board[row][col] = MinePiece(row, col);
      minesCount++;
    }
  }

  while (vaccinesCount < vaccines) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine && !board[row][col].isVaccine) {
      board[row][col] = VaccinePiece(row, col);
      vaccinesCount++;
    }
  }

  while (lockdownsCount < lockdowns) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine && !board[row][col].isVaccine && !board[row][col].isLockdown) {
      board[row][col] = LockdownPiece(row, col);
      lockdownsCount++;
    }
  }

    calculateValues(board);
    return board;
  };

  export default boardCreator;
