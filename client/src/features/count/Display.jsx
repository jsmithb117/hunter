import React from 'react';
import Health from './Health';
import MinesCount from './MinesCount';
import Time from '../time/Time';

const Display = () => {
  return (
    <div className="display">
      <Health />
      <MinesCount />
      <Time />
    </div>
  );
};

export default Display;
