import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cell/cell.component';

@NgModule({
  declarations: [
    GameComponent,
    MessageBoxComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class AppModule  { }
 