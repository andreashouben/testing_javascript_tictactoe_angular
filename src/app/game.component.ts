import { Component } from '@angular/core';
import * as BoardModel from './domain/Board'
import {Board, opponent, Player as PlayerModel, Player, Position, posToString} from './domain/Board';

@Component({
  selector: 'ttt-root',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = 'JS Testing 2022';
  messages: string[] = []
  board: Board = BoardModel.create()
  currentPlayer: Player = 'X'
  winner? : Player

  names =  {
    X: 'Bob',
    O: "Alice"
  }

  setPlayerName = (player: Player, name: string) => this.names[player] = name

  clickAtCell = (position: Position) => {
    const message = this.names[this.currentPlayer] + " sets " + this.currentPlayer + ' on ' + posToString(position)
    this.messages = [...this.messages, message]
    this.board = BoardModel.mark(this.currentPlayer, position, this.board)
    this.currentPlayer = opponent(this.currentPlayer)
    this.winner =  BoardModel.winner(this.board)
    }
}
