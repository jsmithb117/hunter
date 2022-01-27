import React from 'react';
import { useSelector } from 'react-redux';
import { selectMarkedPiecesCount } from '../board/boardSlice';
import { selectMines } from '../count/countSlice';

const MinesCount = () => {
  const minesMarked = useSelector(selectMarkedPiecesCount);
  const totalMines = useSelector(selectMines);

  return (
    <div className="mines-count">
      Mines: {totalMines - minesMarked}
    </div>
  );
};

export default MinesCount;
