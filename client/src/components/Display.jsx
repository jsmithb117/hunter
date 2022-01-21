import React from 'react';
import Health from './Health';
import MinesCount from './MinesCount';
import {
  selectCurrentHealth,
  selectTotalHealth,
} from '../features/user/userSlice';

const Display = () => {
  const currentHealth = selectCurrentHealth();
  const totalHealth = selectTotalHealth();

  return (
    <div className="display">
      <Health
        currentHealth={currentHealth}
        totalHealth={totalHealth}
      />
      <MinesCount />
    </div>
  );
};

export default Display;
