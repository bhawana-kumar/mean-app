import { TestBed } from '@angular/core/testing';

import { CarfilterService } from './carfilter.service';

describe('CarfilterService', () => {
  let service: CarfilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarfilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
