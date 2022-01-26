import { useDispatch, useSelector } from 'react-redux';
import CoronavirusSharpIcon from '@mui/icons-material/CoronavirusSharp';
import MasksSharpIcon from '@mui/icons-material/MasksSharp';
import Button from "@mui/material/Button";
import buttonTextColor from './buttonTextColor';
import { indigo } from "@mui/material/colors";
import InjectionSVG from './InjectionSVG';
import zeroFinder from './zeroFinder';

import { toggleMarked, selectRows } from "./boardSlice";

import {
  uncover,
  selectLoss,
 } from '../count/countSlice';

const Piece = (props) => {
  const { piece, classes, color } = props;
  const { row, col, covered, isMarkedAsMine, isVaccine } = piece;
  const rows = useSelector(selectRows);
  const dispatch = useDispatch();
  const loss = useSelector(selectLoss);
  const icon = isMarkedAsMine ? (
    <CoronavirusSharpIcon>
      {piece.adjacentMines}
    </CoronavirusSharpIcon>)
    : covered ? (<MasksSharpIcon>{piece.adjacentMines}</MasksSharpIcon>)
    : isVaccine ? (<InjectionSVG text={piece.adjacentMines} />)
    : piece.adjacentMines;

  const renderColor = covered ? color : buttonTextColor(piece);
  const leftClickHandler = () => {
    if (loss) {
      return;
    }
    const rowsCopy = rows.map((row) => row.slice());
    dispatch(uncover({ piece, zeroFinderResults: zeroFinder(rowsCopy, row, col) }));
  };
  const rightClickHandler = () => {
    if (!loss) {
      dispatch(toggleMarked(piece));
    }
  };

    return (
      <Button
        className={classes.piece}
        onClick={() => leftClickHandler()}
        onContextMenu={() => rightClickHandler()}
        color={color}
        sx={{
          width: "13.68%",
          color: renderColor,
          border: "1px solid black",
          backgroundColor: indigo[100],
        }}
      >
        {icon}
      </Button>
    );
};

export default Piece;
