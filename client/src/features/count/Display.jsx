import React from 'react';
import Health from './Health';
import MinesCount from './MinesCount';
import Time from '../time/Time';
import Penalty from '../penalty/Penalty';

const Display = () => {
  return (
    <div className="display">
      <Health />
      <MinesCount />
      <Time />
      <Penalty />
    </div>
  );
};

export default Display;
