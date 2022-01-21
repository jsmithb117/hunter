// if piece is a mine, noop
// if piece is adjacent to a mine, uncovers that piece
// if piece is not adjacent to a mine, recursively uncovers adjacent pieces
const zeroFinder = (board, row, col) => {
  if (board[row][col].isMarkedAsMine) {
    return board;
  }
  if (board[row][col].adjacentMines !== 0) {
    board[row][col] = board[row][col].cloneUncovered()
    return board;
  } else {
    board[row][col] = board[row][col].cloneUncovered();
  }
  const prevRow = row - 1;
  const nextRow = row + 1;
  const prevCol = col - 1;
  const nextCol = col + 1;
  const UL = board[prevRow]?.[prevCol] || null;
  const UU = board[prevRow]?.[col] || null;
  const UR = board[prevRow]?.[nextCol] || null;
  const LL = board[row]?.[prevCol] || null;
  const RR = board[row]?.[nextCol] || null;
  const DL = board[nextRow]?.[prevCol] || null;
  const DD = board[nextRow]?.[col] || null;
  const DR = board[nextRow]?.[nextCol] || null;

  if (UL && UL.covered) {
    board = zeroFinder(board, prevRow, prevCol);
  }
  if (UU && UU.covered) {
    board = zeroFinder(board, prevRow, col);
  }
  if (UR && UR.covered) {
    board = zeroFinder(board, prevRow, nextCol);
  }
  if (LL && LL.covered) {
    board = zeroFinder(board, row, prevCol);
  }
  if (RR && RR.covered) {
    board = zeroFinder(board, row, nextCol);
  }
  if (DL && DL.covered) {
    board = zeroFinder(board, nextRow, prevCol);
  }
  if (DD && DD.covered) {
    board = zeroFinder(board, nextRow, col);
  }
  if (DR && DR.covered) {
    board = zeroFinder(board, nextRow, nextCol);
  }
  return board;
};

export default zeroFinder;