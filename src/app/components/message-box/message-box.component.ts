import { Component, Input } from '@angular/core';

@Component({
  selector: 'ttt-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent {
  constructor() {}

  @Input() messages: string[] = [];
}
