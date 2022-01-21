const pieceCounter = (board) => {
  let minesCount = 0;
  let vaccinesCount = 0;
  let lockdownsCount = 0;
  board.forEach((row) => {
    row.forEach((piece) => {
      if (piece.isMine) {
        minesCount += 1;
      } else if (piece.isVaccine) {
        vaccinesCount += 1;
      } else if (piece.isLockdown) {
        lockdownsCount += 1;
      }
    });
  });
  return {
    minesCount,
    vaccinesCount,
    lockdownsCount,
  };
};

export default pieceCounter;
