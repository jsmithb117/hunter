import PieceClass from './PieceClass';
import rowColGenerator from './rowColGenerator';
import calculateValues from './calculateValues';

const boardCreator = (difficultyObject) => {
  const { length, width, mines, vaccines, lockdowns } = difficultyObject;
  const rowColGen = rowColGenerator(length, width);

  const board = Array.from({ length }, () =>
  (Array.from({ length: width }, () => {
    return new PieceClass(rowColGen.next().value)
  })));

  let minesCount = 0;
  let vaccinesCount = 0;
  let lockdownsCount = 0;

  while (minesCount < mines) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine) {
      board[row][col] = new PieceClass({ row, col, isMine: true });
      minesCount++;
    }
  }

  while (vaccinesCount < vaccines) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine && !board[row][col].isVaccine) {
      board[row][col] = new PieceClass({ row, col, isVaccine: true });
      vaccinesCount++;
    }
  }

  while (lockdownsCount < lockdowns) {
    const row = Math.floor(Math.random() * length);
    const col = Math.floor(Math.random() * width);

    if (!board[row][col].isMine && !board[row][col].isVaccine && !board[row][col].isLockdown) {
      board[row][col] = new PieceClass({ row, col, isLockdown: true });
      lockdownsCount++;
    }
  }

    calculateValues(board);
    return board;
  };

  export default boardCreator;