import React from "react";

import Row from "./Row";

import { selectBoard } from "../features/board/boardSlice";

const BoardRows = () => {
  const board = selectBoard();

  const rowsMap = board.map((row, rowIndex) => (
    <Row key={rowIndex} row={row} />
  ));

  return (
    <div className="board-rows">
      {rowsMap}
    </div>
  );
};

export default BoardRows;
