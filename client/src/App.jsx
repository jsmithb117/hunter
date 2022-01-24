import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Rows from "./features/board/Rows";
import Display from "./features/display/Display";
import ErrorBoundary from "./ErrorBoundary";

import {
  createNewBoard,
  selectWin,
  selectLoss,
} from "./features/board/boardSlice";
import { selectDifficulty } from "./features/display/displaySlice";

// debug
import { selectBoard } from "./features/board/boardSlice";
// /debug

function App() {
  const [boardColor, setBoardColor] = useState("#fff");
  const win = useSelector(selectWin);
  const loss = useSelector(selectLoss);
  const difficulty = useSelector(selectDifficulty);
  const dispatch = useDispatch();
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  // debug
  // const board = useSelector(selectBoard);
  // let minesCount = 0;
  // let vaccinesCount = 0;
  // let lockdownsCount = 0;
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
  // console.log("pieceCount: ", { minesCount, vaccinesCount, lockdownsCount });
  // /debug

  useEffect(() => {
    dispatch(createNewBoard(difficulty));
  }, [difficulty, dispatch]);

  useEffect(() => {
    if (win) {
      // TODO: use color names
      setBoardColor("#2ecc71");
    }
    if (loss) {
      // TODO: use color names
      setBoardColor("#e74c3c");
    }
  }, [win, loss, setBoardColor]);

  return (
    <div className="covid-hunter">
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
    </div>
  );
}

export default App;
