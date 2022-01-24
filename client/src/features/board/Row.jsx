import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { evenColorGen, oddColorGen } from "./colorGen";
import Piece from "./Piece";

const Row = (props) => {
  const { row } = props;
  const rowIsEven = row[0].row % 2 === 0;

  const piecesMap = row.map((piece, index) => {
    const color = rowIsEven
      ? evenColorGen.next().value
      : oddColorGen.next().value;
    return (
      <Piece
        key={index}
        piece={piece}
        classes={"classes"}
        color={color}
      />
    );
  });

  return (
    <div className="row">
      <ButtonGroup
        variant="outlined"
        className={"classes.group"}
        sx={{
          boxShadow: "none",
          height: 48,
          width: "80%",
        }}
      >
        {piecesMap}
      </ButtonGroup>
    </div>
  );
};

export default Row;
