import { useDispatch, useSelector } from 'react-redux';
import CoronavirusSharpIcon from '@mui/icons-material/CoronavirusSharp';
import MasksSharpIcon from '@mui/icons-material/MasksSharp';
import Button from "@mui/material/Button";
import buttonTextColor from './buttonTextColor';
import { indigo } from "@mui/material/colors";

import {
  uncover,
  toggleMarked,
  selectLoss,
} from "./boardSlice";

const Piece = (props) => {
  const { piece, classes, color } = props;
  const { covered, isMarkedAsMine } = piece;
  const dispatch = useDispatch();
  const loss = useSelector(selectLoss);
  const icon = isMarkedAsMine ? (
    <CoronavirusSharpIcon>
      {piece.adjacentMines}
    </CoronavirusSharpIcon>)
    : covered ? (<MasksSharpIcon>{piece.adjacentMines}</MasksSharpIcon>)
    : piece.adjacentMines;

  const renderColor = covered ? color : buttonTextColor(piece);
  const leftClickHandler = () => {
    if (loss) {
      return;
    }
    dispatch(uncover(piece));
  };
  const rightClickHandler = () => {
    if (loss) {
      return;
    }
    dispatch(toggleMarked(piece));
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
