/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarouselBrandFilterService } from './carouselBrandFilter.service';

describe('Service: CarouselBrandFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselBrandFilterService]
    });
  });

  it('should ...', inject([CarouselBrandFilterService], (service: CarouselBrandFilterService) => {
    expect(service).toBeTruthy();
  }));
});
