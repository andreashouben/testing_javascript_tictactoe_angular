import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor() { }
 
  @Input() messages: string[] = []


  ngOnInit(): void {
  }

}
