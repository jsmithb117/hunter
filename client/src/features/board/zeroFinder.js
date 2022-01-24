// if piece is a mine, noop
// if piece is adjacent to a mine, uncovers that piece
// if piece is not adjacent to a mine, recursively uncovers adjacent pieces
const zeroFinder = (rows, row, col) => {
  let uncoveredPiecesCount = 0;
  if (rows[row][col].isMarkedAsMine) {
    return { uncoveredPiecesCount, rows };
  }

  rows[row][col].covered = false;
  uncoveredPiecesCount++;

  if (rows[row][col].adjacentMines !== 0) {
    return { uncoveredPiecesCount, rows };
  }
  const prevRow = row - 1;
  const nextRow = row + 1;
  const prevCol = col - 1;
  const nextCol = col + 1;
  const UL = rows[prevRow]?.[prevCol] || null;
  const UU = rows[prevRow]?.[col] || null;
  const UR = rows[prevRow]?.[nextCol] || null;
  const LL = rows[row]?.[prevCol] || null;
  const RR = rows[row]?.[nextCol] || null;
  const DL = rows[nextRow]?.[prevCol] || null;
  const DD = rows[nextRow]?.[col] || null;
  const DR = rows[nextRow]?.[nextCol] || null;

  if (UL && UL.covered) {
    const newBoard = zeroFinder(rows, prevRow, prevCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (UU && UU.covered) {
    const newBoard = zeroFinder(rows, prevRow, col);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (UR && UR.covered) {
    const newBoard = zeroFinder(rows, prevRow, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (LL && LL.covered) {
    const newBoard = zeroFinder(rows, row, prevCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (RR && RR.covered) {
    const newBoard = zeroFinder(rows, row, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (DL && DL.covered) {
    const newBoard = zeroFinder(rows, nextRow, prevCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (DD && DD.covered) {
    const newBoard = zeroFinder(rows, nextRow, col);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  if (DR && DR.covered) {
    const newBoard = zeroFinder(rows, nextRow, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
  }
  return { rows, uncoveredPiecesCount };
};

export default zeroFinder;