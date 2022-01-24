function* rowColGenerator(length, width) {
  let row = 0;
  let col = 0;

  while (row < length && col < width) {
    yield { row, col };
    col++;
    if (col === width) {
      col = 0;
      row++;
    }
  }
};

export default rowColGenerator;
