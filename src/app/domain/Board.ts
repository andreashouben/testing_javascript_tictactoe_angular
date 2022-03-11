export type Position = { x: number; y: number };
export type Player = 'X' | 'O';
export type Board = {
  [key: string]: Player;
};

const cols = [0, 1, 2];
const rows = cols;
const rowsOrCols = cols;
export const opponent = (player: Player) => (player === 'O' ? 'X' : 'O');
export const posToString = (pos: Position) => `${pos.x}/${pos.y}`;
type PossibleWinner = Player | undefined;

type WinByRowCorColXY = (rowOrCol: number, board: Board) => PossibleWinner;
const winnerOfTwoCells = (symbol1: PossibleWinner, symbol2: PossibleWinner) =>
  symbol1 === symbol2 ? symbol1 : undefined;

const or = (a: PossibleWinner, b: PossibleWinner) => a || b;

export const create = () => ({});
export const mark = (player: Player, pos: Position, board: Board) => ({
  ...board,
  [posToString(pos)]: player,
});
export const at = (pos: Position, board: Board): PossibleWinner =>
  board[posToString(pos)];

const winByDiag1 = (board: Board) =>
  rows.map((xy) => at({ x: xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByDiag2 = (board: Board) =>
  rows.map((xy) => at({ x: 2 - xy, y: xy }, board)).reduce(winnerOfTwoCells);

const winByRowY: WinByRowCorColXY = (y: number, board: Board) =>
  cols.map((x) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByColX: WinByRowCorColXY = (x: number, board: Board) =>
  rows.map((y) => at({ x, y }, board)).reduce(winnerOfTwoCells);

const winByRow = (board: Board) => winByRowOrCol(winByRowY, board);
const winByCol = (board: Board) => winByRowOrCol(winByColX, board);
const winByRowOrCol = (winByRowOrColXY: WinByRowCorColXY, board: Board) =>
  rowsOrCols.map((xOrY) => winByRowOrColXY(xOrY, board)).reduce(or);

export const winner = (board: Board) =>
  [winByRow, winByCol, winByDiag1, winByDiag2]
    .map((winCondition) => winCondition(board))
    .reduce(or);

export const positions = () =>
  [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
  ] as Position[];
