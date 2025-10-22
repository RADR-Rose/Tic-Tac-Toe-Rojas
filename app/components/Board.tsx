import React from 'react';
import Square from './Square';
import { BoardProps } from '../types/types';
import { calculateWinner, getGameStatus } from '../utils/Utils';

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay, winningLine = null }) => {
  const handleClick = (i: number): void => {
    const { winner } = calculateWinner(squares);
    
    // Return early if game is over or square is already filled
    if (winner || squares[i]) {
      return;
    }
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const status = getGameStatus(squares, xIsNext);

  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinning={winningLine?.includes(i)}
    />
  );

  return (
    <div className="board-container">
      <div className="status" role="status" aria-live="polite">
        {status}
      </div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;