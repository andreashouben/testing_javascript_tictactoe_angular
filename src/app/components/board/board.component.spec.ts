import {BoardComponent} from './board.component';
import {render, screen} from '@testing-library/angular';
import * as BoardModel from '../../domain/Board'

describe('BoardComponent', () => {

  it('renders', async () => {
    await render(BoardComponent, {
      componentProperties: {
        board: BoardModel.create()
      }
    })

    expect(screen.getByTestId('board')).toBeVisible();
  })

});
