import { TestBed } from '@angular/core/testing';

import { AdminOffersService } from './admin-offers.service';

describe('AdminOffersService', () => {
  let service: AdminOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
