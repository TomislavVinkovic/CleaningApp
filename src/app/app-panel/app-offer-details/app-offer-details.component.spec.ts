import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOfferDetailsComponent } from './app-offer-details.component';

describe('AppOfferDetailsComponent', () => {
  let component: AppOfferDetailsComponent;
  let fixture: ComponentFixture<AppOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOfferDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
