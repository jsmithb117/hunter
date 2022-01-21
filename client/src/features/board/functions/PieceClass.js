class PieceClass {
  adjacentMines;
  isMine;
  isVaccine;
  isLockdown;
  isMarkedAsMine;
  covered;
  row;
  col;
  constructor({
    row,
    col,
    isMine = false,
    isVaccine = false,
    isLockdown = false,
    covered = true,
    adjacentMines = 0,
    isMarkedAsMine = false,
  }) {
    this.adjacentMines = adjacentMines;
    this.isMine = isMine;
    this.isVaccine = isVaccine;
    this.isLockdown = isLockdown;
    this.isMarkedAsMine = isMarkedAsMine;
    this.covered = covered;
    this.row = row;
    this.col = col;
  }

  click() {
    this.covered = !this.covered;
  }
  rightClick() {
    this.isMarkedAsMine = !this.isMarkedAsMine;
  }
  cloneUncovered() {
    return new PieceClass({
      adjacentMines: this.adjacentMines,
      row: this.row,
      col: this.col,
      isMine: this.isMine,
      isVaccine: this.isVaccine,
      isLockdown: this.isLockdown,
      covered: false,
    });
  }
  cloneToggleMarked() {
    return new PieceClass({
      adjacentMines: this.adjacentMines,
      row: this.row,
      col: this.col,
      isMine: this.isMine,
      isVaccine: this.isVaccine,
      isLockdown: this.isLockdown,
      covered: true,
      isMarkedAsMine: !this.isMarkedAsMine,
    })
  }
};

export default PieceClass;
