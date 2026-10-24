import { TestBed } from '@angular/core/testing';

import { CarSelectionService } from './car-selection.service';

describe('CarSelectionService', () => {
  let service: CarSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
