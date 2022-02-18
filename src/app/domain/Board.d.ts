import { Player } from "./Player"

export const positions : () => Position[]
export const at : (pos: Position, board: Board) => string
export const create: () => Board
export const mark: (player: string, pos: Position, boad: Board) => Board
export const winner: (board: Board) => Player | undefined