const setAdjacentMines = (board) => (
  board.forEach((row) => {
    row.forEach((piece) => {
      piece.adjacentMines = countAdjacentMines(piece, board);
    });
  })
);

const countAdjacentMines = (pieceToCount, board) => {
  const { row, col } = pieceToCount;
  let count = 0;
  if (pieceToCount.isMine) {
    return 9;
  } else {
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (board[r] && board[r][c]) {
          const piece = board[r][c];
          if (piece.isMine)
            count += 1;
        };
      }
    };
  }
  return count;
};

export default setAdjacentMines;
