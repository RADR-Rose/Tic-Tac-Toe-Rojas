'use client';

import React, { useState, useCallback } from 'react';
import Board from './Board';
import { GameProps, BoardState } from '../types/types';
import { createEmptyBoard, calculateWinner } from '../utils/Utils';

const Game: React.FC<GameProps> = () => {
  const [history, setHistory] = useState<BoardState[]>([createEmptyBoard()]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const { winner, line: winningLine } = calculateWinner(currentSquares);

  const handlePlay = useCallback((nextSquares: BoardState): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }, [history, currentMove]);

  const jumpTo = useCallback((nextMove: number): void => {
    setCurrentMove(nextMove);
  }, []);

  const resetGame = useCallback((): void => {
    setHistory([createEmptyBoard()]);
    setCurrentMove(0);
  }, []);

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    const isCurrent = move === currentMove;
    
    return (
      <li key={move}>
        <button 
          onClick={() => jumpTo(move)}
          className={isCurrent ? 'current-move' : ''}
          disabled={isCurrent}
          aria-label={`${description}${isCurrent ? ' (current)' : ''}`}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          xIsNext={xIsNext} 
          squares={currentSquares} 
          onPlay={handlePlay}
          winningLine={winningLine}
        />
      </div>
      <div className="game-info">
        <div className="game-controls">
          <button 
            onClick={resetGame}
            className="reset-button"
            aria-label="Start a new game"
          >
            New Game
          </button>
        </div>
        <div className="move-history">
          <h3>Move History</h3>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;