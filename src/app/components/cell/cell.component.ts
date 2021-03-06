import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player, Position, posToString } from '../../domain/Board';

@Component({
  selector: 'ttt-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input() owner: Player | undefined = undefined;
  @Input()
  position!: Position;
  @Output() clicked = new EventEmitter<Position>();

  className: string = '';
  dataPosition: string = '';
  dataTestId: string = '';

  onClick(position: Position) {
    !this.owner && this.clicked.emit(position);
  }

  ngOnInit(): void {
    this.className = `cell cell_${posToString(this.position)}`;
    this.dataPosition = posToString(this.position);
    this.dataTestId = `cell_${posToString(this.position)}`;
  }
}
