import React from 'react';
import { useSelector } from 'react-redux';
import { selectPiecesMarkedAsMine } from '../board/boardSlice';

const MinesCount = () => {
  const minesMarked = useSelector(selectPiecesMarkedAsMine);

  return (
    <div className="mines-count">
      Mines: {minesMarked}
    </div>
  );
};

export default MinesCount;
