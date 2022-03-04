import { render, screen } from '@testing-library/angular';
import { GameComponent } from './game.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { CellComponent } from './components/cell/cell.component';

describe('GameComponent', () => {
  it('should render the board', async () => {
    await render(GameComponent, {
      declarations: [
        BoardComponent,
        PlayerComponent,
        MessageBoxComponent,
        CellComponent,
      ],
    });
  });
});
