import React from 'react';
import BoardRows from './BoardRows';
import Display from './Display';

const Home = () => {
  return (
    <div className="home">
      <BoardRows />
      <Display />
    </div>
  );
};

export default Home;
