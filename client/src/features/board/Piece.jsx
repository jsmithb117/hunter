import { useDispatch } from 'react-redux';
import CoronavirusSharpIcon from '@mui/icons-material/CoronavirusSharp';
import MasksSharpIcon from '@mui/icons-material/MasksSharp';
import Button from "@mui/material/Button";
import buttonColor from './buttonColor';
import { uncover, toggleMarked, findZeroes } from "./boardSlice";



const Piece = (props) => {
  const { piece, classes, color } = props;
  const { covered, isMarkedAsMine } = piece;
  const dispatch = useDispatch();
  const icon = isMarkedAsMine ? (
    <CoronavirusSharpIcon>
      {piece.adjacentMines}
    </CoronavirusSharpIcon>)
    : covered ? (<MasksSharpIcon>{piece.adjacentMines}</MasksSharpIcon>)
    : piece.adjacentMines;

    const renderColor = covered ? color : buttonColor(piece);

  const leftClickHandler = () => {
    dispatch(uncover(piece));
    dispatch(findZeroes(piece))
  };
    return (
      <Button
        className={classes.piece}
        onClick={() => leftClickHandler()}
        onContextMenu={() => dispatch(toggleMarked(piece))}
        color={color}
        sx={{
          width: "13.68%",
          color: renderColor,
        }}
      >
        {icon}
      </Button>
    );
};

export default Piece;
