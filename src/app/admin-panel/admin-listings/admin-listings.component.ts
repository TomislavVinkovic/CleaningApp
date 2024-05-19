import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog/confirm-dialog.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { AdminUsersService } from '../admin-users/service/admin-users.service';
import { AdminListingsService } from './service/admin-listings.service';
import { Listing } from '../../models/listing';
import { ClientPagination } from '../../types/client-pagination';
import { AdminListingDetailsComponent } from '../admin-listing-details/admin-listing-details.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';

@Component({
  selector: 'app-admin-listings',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin-listings.component.html',
  styleUrl: './admin-listings.component.scss'
})
export class AdminListingsComponent implements OnInit {
  constructor(
    private errorHandler: ErrorHandlerService,
    private listingsService: AdminListingsService,
    private snackbar: SnackBarService,
    private confirmDialog: ConfirmDialogService,
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
        console.log('Oglasi')
        console.log(result.data)
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

  onDeleteListingConfirmed(listing: Listing) {
    this.listingsService.deleteListing(listing.id!).subscribe({
      next: _ => {
        this.snackbar.open('Oglas uspješno obrisan');
        this.getListings();
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }
  deleteListing(listing: Listing) {
    this.confirmDialog.open(
      'Jeste li sigurni da želite obrisati ovaj oglas?',
      'Obriši',
      'Odustani'
    ).subscribe(
      answer => {
        if(answer) {
          this.onDeleteListingConfirmed(listing);
        }
      }
    );

  }
}
