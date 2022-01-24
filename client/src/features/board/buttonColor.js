const buttonColor = (piece) => (
  piece.adjacentMines === 0 ? 'lightgray' :
  piece.adjacentMines === 1 ? 'blue' :
  piece.adjacentMines === 2 ? 'green' :
  piece.adjacentMines === 3 ? 'red' :
  piece.adjacentMines === 4 ? 'purple' :
  piece.adjacentMines === 5 ? 'maroon' :
  piece.adjacentMines === 6 ? 'turquoise' :
  piece.adjacentMines === 7 ? 'black' :
  piece.adjacentMines === 8 ? 'gray' :
  null
);

export default buttonColor;
