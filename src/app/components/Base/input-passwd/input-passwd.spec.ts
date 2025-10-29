import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswd } from './input-passwd';

describe('InputPasswd', () => {
  let component: InputPasswd;
  let fixture: ComponentFixture<InputPasswd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPasswd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPasswd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
