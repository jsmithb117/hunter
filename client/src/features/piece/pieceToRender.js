import CoronavirusSharpIcon from "@mui/icons-material/CoronavirusSharp";
import MasksSharpIcon from "@mui/icons-material/MasksSharp";

const pieceToRender = (piece) => {
  const { covered, isMarkedAsMine } = piece;
  if (isMarkedAsMine) {
    return <CoronavirusSharpIcon>{piece.adjacentMines}</CoronavirusSharpIcon>;
  } else if (covered) {
    return <MasksSharpIcon>{piece.adjacentMines}</MasksSharpIcon>;
  }
    return piece.adjacentMines;
};

export default pieceToRender;
