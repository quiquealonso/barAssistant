import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsername } from './input-username';

describe('InputUsername', () => {
  let component: InputUsername;
  let fixture: ComponentFixture<InputUsername>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUsername]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUsername);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
