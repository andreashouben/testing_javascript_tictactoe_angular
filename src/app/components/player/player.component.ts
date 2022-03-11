import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ttt-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() label!: string;
  @Input() name!: string;
  @Output() nameChanged = new EventEmitter<string>();

  onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.name = target.value.toUpperCase();
    this.nameChanged.emit(target.value);
  };
}
