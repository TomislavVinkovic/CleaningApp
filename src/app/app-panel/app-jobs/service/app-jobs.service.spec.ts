import { TestBed } from '@angular/core/testing';

import { AppJobsService } from './app-jobs.service';

describe('AppJobsService', () => {
  let service: AppJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
