export const EmptyPiece = (row = 0, col = 0) => ({
  row,
  col,
  isMine: false,
  isVaccine: false,
  isLockdown: false,
  covered: true,
  adjacentMines: 0,
  isMarkedAsMine: false,
});

export const MinePiece = (row, col) => (
  Object.assign(
    EmptyPiece(row, col),
    { isMine: true },
  ));

export const VaccinePiece = (row, col) => (
  Object.assign(
    EmptyPiece(row, col),
    { isVaccine: true },
  ));

export const LockdownPiece = (row, col) => (
  Object.assign(
    EmptyPiece(row, col),
    { isLockdown: true },
  ));
