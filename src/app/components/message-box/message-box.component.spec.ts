import { render, screen } from '@testing-library/angular';
import { MessageBoxComponent } from './message-box.component';
describe('MessageBoxComponent', () => {
  it('should list the passed messages', async () => {
    const messages = ['Message 1', 'Message 2'];
    await render(MessageBoxComponent, {
      componentProperties: {
        messages,
      },
    });
    const listitems = screen.getAllByRole('listitem');
    expect(listitems.length).toEqual(2);
    expect(listitems.map((item) => item.textContent?.trim())).toEqual(messages);
  });
});
