import { TestBed } from '@angular/core/testing';

import { CategortTypeService } from './categort-type-service';

describe('CategortTypeService', () => {
  let service: CategortTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategortTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
