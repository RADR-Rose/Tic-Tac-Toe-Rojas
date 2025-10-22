export type Player = 'X' | 'O';
export type SquareValue = Player | null;
export type BoardState = SquareValue[];

export interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
  isWinning?: boolean;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: BoardState;
  onPlay: (nextSquares: BoardState) => void;
  winningLine?: number[] | null;
}

export interface GameProps { }