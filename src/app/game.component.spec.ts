import { render, screen } from '@testing-library/angular';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  it('should render the board', async () => {
    await render(GameComponent);
  });
});
