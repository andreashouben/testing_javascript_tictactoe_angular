import * as Board from './Board';
import { opponent, Player } from './Board';

describe('opponent', () => {
  it('returns the opposite Player', () => {
    expect(opponent('X')).toEqual('O');
    expect(opponent('O')).toEqual('X');
  });
});

describe('Board', () => {
  it('should export its cell positions', () => {
    expect(Board.positions()).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
    ]);
  });

  it('should mark an Player at position with mark', () => {
    const board = Board.create();
    const resultBoard = Board.mark('X', { x: 0, y: 0 }, board);
    expect(Board.at({ x: 0, y: 0 }, resultBoard)).toEqual('X');
  });

  it('should start with player undefined at every postion', () => {
    const board = Board.create();
    expect(Board.at({ x: 0, y: 0 }, board)).toEqual(undefined);
    expect(Board.at({ x: 2, y: 2 }, board)).toEqual(undefined);
  });
});

describe('Board.winner', () => {
  test('there is no winner for an empty board', () => {
    const board = Board.create();
    expect(Board.winner(board)).toEqual(undefined);
  });

  it('should return the winning player for rows', () => {
    const board = Board.create();
    const resultBoard = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ].reduce((board, pos) => Board.mark('O', pos, board), board);

    expect(Board.winner(resultBoard)).toEqual('O');
  });

  it('should return the winning player for cols', () => {
    const board = Board.create();
    const resultBoard = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ].reduce((board, pos) => Board.mark('X', pos, board), board);

    expect(Board.winner(resultBoard)).toEqual('X');
  });
  it('should return the winning player for diagonal1', () => {
    const board = Board.create();
    const resultBoard = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ].reduce((board, pos) => Board.mark('X', pos, board), board);

    expect(Board.winner(resultBoard)).toEqual('X');
  });

  it('should return the winning player for diagonal2', () => {
    const board = Board.create();
    const resultBoard = [
      { x: 2, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 2 },
    ].reduce((board, pos) => Board.mark('O', pos, board), board);

    expect(Board.winner(resultBoard)).toEqual('O');
  });

  test('there is no winner for a mixed row', () => {
    const board = Board.create();
    const board2 = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ].reduce((board, pos) => Board.mark('X', pos, board), board);

    const board3 = Board.mark('O', { x: 2, y: 0 }, board2);

    expect(Board.winner(board3)).toEqual(undefined);
  });
});
