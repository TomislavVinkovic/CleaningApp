import { TestBed } from '@angular/core/testing';

import { AdminUsersAdminUsersService } from './admin-users.service';

describe('AdminUsersAdminUsersService', () => {
  let service: AdminUsersAdminUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUsersAdminUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
