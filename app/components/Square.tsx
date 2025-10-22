import React from 'react';
import { SquareProps } from '../types/types';

const Square: React.FC<SquareProps> = ({ value, onSquareClick, isWinning = false }) => {
  return (
    <button 
      className={`square ${isWinning ? 'winning-square' : ''}`}
      onClick={onSquareClick}
      aria-label={value ? `Square filled with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
};

export default Square;