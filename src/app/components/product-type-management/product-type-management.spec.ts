import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeManagement } from './product-type-management';

describe('ProductTypeManagement', () => {
  let component: ProductTypeManagement;
  let fixture: ComponentFixture<ProductTypeManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTypeManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTypeManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
