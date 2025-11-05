import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTypeManagement } from './ingredient-type-management';

describe('IngredientTypeManagement', () => {
  let component: IngredientTypeManagement;
  let fixture: ComponentFixture<IngredientTypeManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientTypeManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientTypeManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
