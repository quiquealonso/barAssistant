import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picktable } from './picktable';

describe('Picktable', () => {
  let component: Picktable;
  let fixture: ComponentFixture<Picktable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Picktable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Picktable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
