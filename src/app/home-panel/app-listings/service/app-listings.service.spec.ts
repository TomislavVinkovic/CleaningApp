import { TestBed } from '@angular/core/testing';

import { AppListingsService } from './app-listings.service';

describe('AppListingsService', () => {
  let service: AppListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
