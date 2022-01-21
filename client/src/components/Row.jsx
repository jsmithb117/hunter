import React from "react";
import { withStyles } from "@mui/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import { evenColorGen, oddColorGen } from "../features/row/generateColors";
import Piece from "./Piece";

const styles = {
  group: {
    display: "flex",
    width: "80%",
  },
  piece: {
    height: 48,
    width: "20%",
  },
};

const Row = (props) => {
  const {
    row,
    classes,
    dispatchToggleCovered,
    dispatchFindZeroes,
    dispatchSetMarked,
  } = props;
  const rowIsEven = row[0].row % 2 === 0;

  const leftClickHandler = (piece) => {
    dispatchToggleCovered(piece);
    dispatchFindZeroes(piece.row, piece.col);
  };

  const rightClickHandler = (piece) => {
    dispatchSetMarked(piece.row, piece.col);
  };

  const piecesMap = row.map((piece, index) => {
    const color = rowIsEven ? evenColorGen() : oddColorGen();

    return (
      <Piece
        key={index}
        piece={piece}
        classes={classes}
        leftClickHandler={leftClickHandler}
        rightClickHandler={rightClickHandler}
        color={color}
      />
    );
  });

  return (
    <div className="row">
      <ButtonGroup
        variant="outlined"
        className={classes.group}
        sx={{
          boxShadow: "none",
        }}
      >
        {piecesMap}
      </ButtonGroup>
    </div>
  );
};

export default withStyles(styles)(Row);
