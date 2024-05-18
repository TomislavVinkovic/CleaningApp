import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListingDetailsComponent } from './admin-listing-details.component';

describe('AdminListingDetailsComponent', () => {
  let component: AdminListingDetailsComponent;
  let fixture: ComponentFixture<AdminListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
