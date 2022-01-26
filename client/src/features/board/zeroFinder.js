// if piece is already uncovered, noop
// if piece is adjacent to a mine, uncovers that piece
// if piece is not adjacent to a mine, uncovers that piece and recursively uncovers adjacent pieces
let zeroFinder = (rows, row, col) => {
  let uncoveredPiecesCount = 0;
  let vaccinesCount = 0;
  const piece = rows[row][col];

  const { covered, isMarkedAsMine, adjacentMines, isVaccine } = piece;
  if (!covered) {
    return { rows, uncoveredPiecesCount, vaccinesCount }
  }
  if (isMarkedAsMine) {
    return { rows, uncoveredPiecesCount, vaccinesCount };
  }
  rows[row][col] = { ...piece, covered: false };
  uncoveredPiecesCount++;
  if (isVaccine) {
    vaccinesCount++;
  }
  if (adjacentMines !== 0) {
    return { rows, uncoveredPiecesCount, vaccinesCount };

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
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (UU && UU.covered) {
    const newBoard = zeroFinder(rows, prevRow, col);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (UR && UR.covered) {
    const newBoard = zeroFinder(rows, prevRow, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (LL && LL.covered) {
    const newBoard = zeroFinder(rows, row, prevCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (RR && RR.covered) {
    const newBoard = zeroFinder(rows, row, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (DL && DL.covered) {
    const newBoard = zeroFinder(rows, nextRow, prevCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (DD && DD.covered) {
    const newBoard = zeroFinder(rows, nextRow, col);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  if (DR && DR.covered) {
    const newBoard = zeroFinder(rows, nextRow, nextCol);
    rows = newBoard.rows;
    uncoveredPiecesCount += newBoard.uncoveredPiecesCount;
    vaccinesCount += newBoard.vaccinesCount;
  }
  return { rows, uncoveredPiecesCount, vaccinesCount };

};

export default zeroFinder;
