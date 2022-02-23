import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Position } from 'src/app/domain/Board';

@Component({
  selector: 'ttt-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() owner = ''
  @Input()
  position!: Position;
  @Output() clicked = new EventEmitter<Position>()

  className: string = '';
  dataPosition: string = ''
  dataTestId: string = ''


  onClick(position: Position) {
    this.clicked.emit(position)
  }

  ngOnInit(): void {
    this.className = `cell cell_${this.position.print()}`
    this.dataPosition = this.position.print()
    this.dataTestId = `cell_${this.position.print()}`
  }

}
