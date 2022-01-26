import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

import { selectRows } from "./boardSlice";

const Rows = () => {
  const rows = useSelector(selectRows);

  const rowsMap = rows.map((row, rowIndex) => (
    <Row key={rowIndex} row={row} />
  ));

  return (
    <div className="rows">
      {rowsMap}
    </div>
  );
};

export default Rows;
