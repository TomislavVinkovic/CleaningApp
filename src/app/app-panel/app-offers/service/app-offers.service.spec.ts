import { TestBed } from '@angular/core/testing';

import { AppOffersService } from './app-offers.service';

describe('AppOffersService', () => {
  let service: AppOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
