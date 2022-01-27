import { useDispatch, useSelector } from 'react-redux';
import CoronavirusSharpIcon from '@mui/icons-material/CoronavirusSharp';
import MasksSharpIcon from '@mui/icons-material/MasksSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import Button from "@mui/material/Button";
import buttonTextColor from './buttonTextColor';
import { indigo, red } from "@mui/material/colors";
import InjectionSVG from './InjectionSVG';
import zeroFinder from './zeroFinder';
import styles from './Piece.module.css';

import { toggleMarked, selectRows } from "./boardSlice";

import { uncover, selectLoss } from '../count/countSlice';

const Piece = (props) => {
  const { piece, color } = props;
  const { row, col, covered, isMarkedAsMine, isVaccine, isMine, isLockdown } =
    piece;
  const rows = useSelector(selectRows);
  const dispatch = useDispatch();
  const loss = useSelector(selectLoss);
  const buttonColor = isMine && !covered ? red[900] : indigo[100]

  const icon = isMarkedAsMine ? (
    <CoronavirusSharpIcon
      sx={{
        color: red[500],
      }}
    >
      {piece.adjacentMines}
    </CoronavirusSharpIcon>
  ) : covered ? (
    <MasksSharpIcon>{piece.adjacentMines}</MasksSharpIcon>
  ) : isVaccine ? (
    <InjectionSVG text={piece.adjacentMines} />
  ) : isMine && !covered ? (
    <CoronavirusSharpIcon
      sx={{
        color: red[100],
        background: red[900],
      }}
    />
  ) : isLockdown ? (
    <div className={styles.lock}>
      <LockSharpIcon
        sx={{
          zIndex: '1',
        }}
      />
      <span className={styles.number}>{piece.adjacentMines}</span>
    </div>
  ) : (
    piece.adjacentMines
  );

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
        onClick={() => leftClickHandler()}
        onContextMenu={() => rightClickHandler()}
        color={color}
        sx={{
          width: '13.68%',
          color: renderColor,
          border: '1px solid black',
          backgroundColor: buttonColor,
        }}
      >
        {icon}
      </Button>
    );
};

export default Piece;
