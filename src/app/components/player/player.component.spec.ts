import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { render, screen } from '@testing-library/angular';
import { BoardComponent } from '../board/board.component';

describe('PlayerComponent', () => {
  it('should render', async () => {
    await render(PlayerComponent, {
      componentProperties: {
        label: 'label',
        name: 'name',
      },
    });

    expect(screen.getByText('label')).toBeVisible();
  });
});
