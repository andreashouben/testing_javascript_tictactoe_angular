import { TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GameComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'andreashouben-js_testing_2021_ui_example_ttt'`, () => {
    const fixture = TestBed.createComponent(GameComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('andreashouben-js_testing_2021_ui_example_ttt');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GameComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('andreashouben-js_testing_2021_ui_example_ttt app is running!');
  });
});
