import React from 'react';
import { useSelector } from 'react-redux';
import { selectMarkedPiecesCount } from '../board/boardSlice';

const MinesCount = () => {
  const minesMarked = useSelector(selectMarkedPiecesCount);

  return (
    <div className="mines-count">
      Mines: {minesMarked}
    </div>
  );
};

export default MinesCount;
