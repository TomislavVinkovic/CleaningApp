import { Component, signal, WritableSignal } from '@angular/core';
import { Listing } from '../../models/listing';
import { MatDialog } from '@angular/material/dialog';
import { AdminListingDetailsComponent } from '../../admin-panel/admin-listing-details/admin-listing-details.component';
import { ConfirmDialogService } from '../../services/confirm-dialog/confirm-dialog.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { ClientPagination } from '../../types/client-pagination';
import { AppListingsService } from './service/app-listings.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { InputDialogService } from '../../services/input-dialog/input-dialog.service';

@Component({
  selector: 'app-app-listings',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app-listings.component.html',
  styleUrl: './app-listings.component.scss'
})
export class AppListingsComponent {
  constructor(
    private errorHandler: ErrorHandlerService,
    private listingsService: AppListingsService,
    private snackbar: SnackBarService,
    private confirmDialog: ConfirmDialogService,
    private inputDialog: InputDialogService,
    private dialog: MatDialog,
  ) {}

  isLoading: boolean = false;
  displayedColumns = [
    'orderer', 
    'email', 
    'type',
    'options'
  ];

  listings: WritableSignal<Listing[]> = signal([]);

  pagination: ClientPagination = {
    perPage: 10,
    page: 1,
    pageSizeOptions: [10, 20, 50, 100],
    defaultPageSize: 10,
    totalResults: 0,
  };

  ngOnInit(): void {
    this.getListings();
  }

  getListings() {
    this.isLoading = true;
    this.listingsService.getListings(this.pagination).subscribe({
      next: (result) => {
        this.listings.set(result.data);
        this.pagination.totalResults = result.meta.total;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  openListingDetails(listing: Listing) {
    this.dialog.open(AdminListingDetailsComponent, {
      data: {
        listingId: listing.id
      },
      maxWidth: '700px',
    });
  }
  
  makeOffer(listing: Listing) {
    this.inputDialog.open(
      'Unesite cijenu ponude',
      {
        placeholder: 'Cijena ponude',
        defaultValue: 0,
      },
      'Ponudi',
      'Odustani',
    ).subscribe( price => {
      if (price) {
        this.isLoading = true;
        this.listingsService.makeOffer(listing.id!, price).subscribe({
          next: (response) => {
            this.isLoading = false;
            this.snackbar.open('Ponuda uspješno poslana!');
            this.getListings();
          },
          error: (error) => {
            this.isLoading = false;
            this.errorHandler.handleError(error);
          }
        })
      }
    })
  }
}
