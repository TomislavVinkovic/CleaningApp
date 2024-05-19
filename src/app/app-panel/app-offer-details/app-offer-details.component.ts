import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminListingsService } from '../../admin-panel/admin-listings/service/admin-listings.service';
import { AdminUserDetailsComponent } from '../../admin-panel/admin-user-details/admin-user-details.component';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AppOffersService } from '../app-offers/service/app-offers.service';
import { Offer } from '../../models/offer';
import { carTypeMapper, listingCategoryMapper } from '../../app_constants';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';

@Component({
  selector: 'app-app-offer-details',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  templateUrl: './app-offer-details.component.html',
  styleUrl: './app-offer-details.component.scss'
})
export class AppOfferDetailsComponent implements OnInit {

  constructor(
    // mat dialog ref and dialog data
    @Inject(MAT_DIALOG_DATA) public data: { offerId: string },
    public dialogRef: MatDialogRef<AdminUserDetailsComponent>,

    private offersService: AppOffersService,
    private errorHandler: ErrorHandlerService,
  ) {}

  offer?: Offer;
  isLoading: boolean = false;

  carTypeMapper = carTypeMapper;
  listingCategoryMapper = listingCategoryMapper;

  fetchData() {
    this.isLoading = true;
    this.offersService.getOfferDetails(this.data.offerId).subscribe({
      next: (data) => {
        this.offer = data.offer;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  onClose() {
    this.dialogRef.close();
  }
}
