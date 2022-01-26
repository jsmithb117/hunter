import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightGreen, red } from "@mui/material/colors";

import "./App.css";
import Rows from "./features/board/Rows";
import Display from "./features/display/Display";
import ErrorBoundary from "./ErrorBoundary";

import boardCreator from "./features/board/boardCreator";
import { createNewBoard } from "./features/board/boardSlice";
import { selectWin, selectLoss } from "./features/count/countSlice";
import { selectDifficulty } from "./features/difficulty/difficultySlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#04724D",
    },
    secondary: {
      main: "#38182D",
    },
  },
});

function App() {
  const [boardColor, setBoardColor] = useState("#EBF1FF");
  const win = useSelector(selectWin);
  const loss = useSelector(selectLoss);
  const difficulty = useSelector(selectDifficulty);
  const dispatch = useDispatch();
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  // debug
  // import { selectRows } from "./features/board/boardSlice";
  // const board = useSelector(selectRows);
  // let minesCount = 0;
  // let vaccinesCount = 0;
  // let lockdownsCount = 0;
  // // console.log('board: ', board)
  // board.forEach((row, rowIndex) => {
  //   row.forEach((piece, colIndex) => {
  //     if (piece.isMine) {
  //       minesCount++;
  //     }
  //     if (piece.isVaccine) {
  //       vaccinesCount++;
  //     }
  //     if (piece.isLockdown) {
  //       lockdownsCount++;
  //     }
  //   });
  // });
  // if ( minesCount !== 8 || vaccinesCount !== 3 || lockdownsCount !== 3) {
  // console.log("NOT ENOUGH PIECES pieceCount: ", { minesCount, vaccinesCount, lockdownsCount });
  // }
  // /debug

  useEffect(() => {
    const payload = {
      rows: boardCreator(difficulty),
      length: difficulty.length,
      width: difficulty.width,
      mines: difficulty.mines,
    }
    dispatch(createNewBoard(payload));
  }, [difficulty, dispatch]);

  useEffect(() => {
    if (win) {
      setBoardColor(lightGreen[500]);
    }
    if (loss) {
      setBoardColor(red[900]);
    }
  }, [win, loss, setBoardColor]);

  return (
    <div className="covid-hunter">
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <ErrorBoundary>
            <Display />
          </ErrorBoundary>
          <ErrorBoundary>
            <Rows />
          </ErrorBoundary>
          <Helmet>
            <style type="text/css">
              {`
          body {
            background-color : ${boardColor}
          }
          `}
            </style>
          </Helmet>
        </HelmetProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
