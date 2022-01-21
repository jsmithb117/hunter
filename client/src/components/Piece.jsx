import Button from "@mui/material/Button";
import pieceToRender from "../features/piece/pieceToRender";

const Piece = (props) => {
  const { piece, classes, leftClickHandler, rightClickHandler, color } = props;
  return (
    <Button
      className={classes.piece}
      onClick={() => leftClickHandler(piece)}
      onContextMenu={() => {
        rightClickHandler(piece);
      }}
      color={color}
    >
      {pieceToRender(piece)}
    </Button>
  );
};

export default Piece;
