import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOffersComponent } from './app-offers.component';

describe('AppOffersComponent', () => {
  let component: AppOffersComponent;
  let fixture: ComponentFixture<AppOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
