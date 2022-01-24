import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

import { selectBoard } from "./boardSlice";

const Rows = () => {
  const board = useSelector(selectBoard);

  const rowsMap = board.map((row, rowIndex) => (
    <Row key={rowIndex} row={row} />
  ));

  return (
    <div className="board-rows">
      {rowsMap}
    </div>
  );
};

export default Rows;
