import React, { useState, useEffect } from 'react';

import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './Home';

import {
  createNewBoard,
  selectWin,
  selectLoss,
} from './features/board/boardSlice';
import { selectDifficulty } from './features/form/formSlice';


// debug
import pieceCounter from './debug/pieceCounter';
import { selectBoard } from './features/board/boardSlice';
// /debug

function App() {
  const [boardColor, setBoardColor] = useState('#fff');
  const win = selectWin();
  const loss = selectLoss();
  const difficulty = selectDifficulty();

  // debug
  const board = selectBoard();
  // /debug


  useEffect(() => {
    createNewBoard(difficulty);

    // debug
    console.log(pieceCounter(board));
    // also remove board dependency
    // /debug

  }, [difficulty, board]);

  useEffect(() => {
    if (win) {
      // TODO: use color names
      setBoardColor('#2ecc71');
    }
    if (loss) {
      // TODO: use color names
      setBoardColor('#e74c3c');
    }
  }, [win, loss, setBoardColor]);

  return (
    <div className="covid-hunter">
    <HelmetProvider>
      <Home />
      <Helmet>
        <style type='text/css'>
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
