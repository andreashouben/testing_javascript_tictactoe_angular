import { PlayerComponent } from './player.component';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('PlayerComponent', () => {
  it('should render an input field with the given label and display the given name in upper case', async () => {
    await render(PlayerComponent, {
      componentProperties: {
        label: 'label',
        name: 'name',
      },
    });

    expect(screen.getByLabelText('label:')).toHaveValue('NAME');
  });

  it('should emit the changed name on input', async () => {
    let mockFn = jest.fn();
    await render(PlayerComponent, {
      componentProperties: {
        label: 'label',
        name: 'name',
        nameChanged: {
          emit: mockFn,
        } as any,
      },
    });

    userEvent.type(screen.getByLabelText('label:'), 'Hallo');

    expect(mockFn).toHaveBeenNthCalledWith(1, 'NAMEH');
    expect(mockFn).toHaveBeenNthCalledWith(5, 'NAMEHALLO');
  });
});
