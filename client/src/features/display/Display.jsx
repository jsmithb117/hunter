import React from 'react';
import Health from './Health';
import MinesCount from './MinesCount';

const Display = () => {
  return (
    <div className="display">
      <Health />
      <MinesCount />
    </div>
  );
};

export default Display;
