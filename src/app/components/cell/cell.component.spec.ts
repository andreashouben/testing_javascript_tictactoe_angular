import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';
import {render, screen} from '@testing-library/angular';
import {Position} from '../../domain/Board';

describe('CellComponent', () => {

  it('renders', async () =>{
    const position: Position = {x:0,y:0}

    await render(CellComponent,{
      componentProperties:{
        owner: 'X',
        position
      }
    })

    expect(screen.getByTestId('cell_0|0')).toBeVisible()

  })
});
