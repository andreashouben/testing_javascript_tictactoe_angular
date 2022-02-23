import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as BoardModel from '../../domain/Board'
import { Board, Position } from '../../domain/Board';


@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']

})
export class BoardComponent implements OnInit {

  @Input() board! : Board
  @Output()  clicked = new EventEmitter<Position>()

  positions: Position[] = []
  owner = (position: Position) => BoardModel.at(position, this.board)



  onClick (position: Position){
    this.clicked.emit(position)
  }

  ngOnInit(): void {
    this.positions = BoardModel.positions()
  }

}
