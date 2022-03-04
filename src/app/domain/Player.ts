export type Player = 'X' | 'O'
type PlayerModel = {
  X: "X"
  O: "O",
  opponent: (player: Player) => Player
}
export const Player: PlayerModel = {
  X: "X",
  O: "O",
  opponent: (player: Player) => (player === Player.O ? Player.X : Player.O),
};
