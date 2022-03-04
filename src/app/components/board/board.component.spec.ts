import { BoardComponent } from './board.component';
import { render, screen } from '@testing-library/angular';
import * as BoardModel from '../../domain/Board';
import { CellComponent } from '../cell/cell.component';

describe('BoardComponent', () => {
  it('renders', async () => {
    await render(BoardComponent, {
      componentProperties: {
        board: BoardModel.create(),
      },
      declarations: [CellComponent],
    });

    expect(screen.getByTestId('board')).toBeVisible();
  });
});
