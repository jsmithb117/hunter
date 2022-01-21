const initialBoardState = {
  piecesMarkedAsMine: 0,
  board: [[{
    adjacentMines: 0,
    isMine: false,
    isVaccine: false,
    isLockdown: false,
    isMarkedAsMine: false,
    covered: true,
    row: 0,
    col: 0,
  }]],
  win: false,
  loss: false,
};

export default initialBoardState;