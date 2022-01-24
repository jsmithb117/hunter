const difficulty = {
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

const defaultState = {
  user: {
    username: '',
    totalHealth: 3,
    currentHealth: 3,
  },
  board: {
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
  },
  display: {
    minesDisplay: 0,
    difficulty: difficulty.beginner,
    paused: false,
    highScores: [],
  },
};

export default defaultState;

