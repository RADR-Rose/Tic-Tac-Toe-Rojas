import { BoardState, Player } from '@/app/types/types';

const winLines = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];

export const calculateWinner = (squares: BoardState): { winner: Player | null; line: number[] | null } => 
{
  for (const line of winLines) 
  {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) 
      {
        return { winner: squares[a] as Player, line };
      }
  }
  return { winner: null, line: null };
};

export const createEmptyBoard = (): BoardState => Array(9).fill(null);

export const isBoardFull = (squares: BoardState): boolean => 
{
  return squares.every(square => square !== null);
};

export const getGameStatus = (squares: BoardState, xIsNext: boolean): string => 
{
  const { winner } = calculateWinner(squares);
  
  if (winner) 
  {
    return `Winner: ${winner}`;
  }
  
  if (isBoardFull(squares)) 
  {
    return "It's a draw!";
  }
  
  return `Next player: ${xIsNext ? 'X' : 'O'}`;
};