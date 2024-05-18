import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AdminUserDetailsComponent } from '../admin-user-details/admin-user-details.component';
import { AdminListingsService } from '../admin-listings/service/admin-listings.service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-admin-listing-details',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  templateUrl: './admin-listing-details.component.html',
  styleUrl: './admin-listing-details.component.scss'
})
export class AdminListingDetailsComponent implements OnInit {

  constructor(
    // mat dialog ref and dialog data
    @Inject(MAT_DIALOG_DATA) public data: { listingId: string },
    public dialogRef: MatDialogRef<AdminUserDetailsComponent>,

    private listingService: AdminListingsService,
    private errorHandler: ErrorHandlerService,
  ) {}

  listing?: Listing;
  isLoading: boolean = false;

  fetchData() {
    this.isLoading = true;
    this.listingService.getListingDetails(this.data.listingId).subscribe({
      next: (data) => {
        this.listing = data.listing;
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
