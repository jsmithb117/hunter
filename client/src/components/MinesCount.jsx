import React from 'react';
import { selectPiecesMarkedAsMine } from '../features/board/boardSlice';

const MinesCount = () => {
  const minesMarked = selectPiecesMarkedAsMine();

  return (
    <div className="mines-count">
      Mines: {minesMarked}
    </div>
  );
};

export default MinesCount;
