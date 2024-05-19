import { Component, signal, WritableSignal } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AdminOffersService } from './service/admin-offers.service';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { AppOfferDetailsComponent } from '../../app-panel/app-offer-details/app-offer-details.component';
import { Offer } from '../../models/offer';
import { InputDialogService } from '../../services/input-dialog/input-dialog.service';
import { ClientPagination } from '../../types/client-pagination';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';

@Component({
  selector: 'app-admin-offers',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin-offers.component.html',
  styleUrl: './admin-offers.component.scss'
})
export class AdminOffersComponent {
  constructor(
    private errorHandler: ErrorHandlerService,
    private offersService: AdminOffersService,
    private snackbar: SnackBarService,
    private inputDialog: InputDialogService,
    private dialog: MatDialog,
  ) {}

  isLoading: boolean = false;
  displayedColumns = [
    'orderer', 
    'type', 
    'price',
    'status',
    'options'
  ];

  offers: WritableSignal<Offer[]> = signal([]);

  pagination: ClientPagination = {
    perPage: 10,
    page: 1,
    pageSizeOptions: [10, 20, 50, 100],
    defaultPageSize: 10,
    totalResults: 0,
  };

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.isLoading = true;
    this.offersService.getOffers(this.pagination).subscribe({
      next: (result) => {
        this.offers.set(result.data);
        this.pagination.totalResults = result.meta.total;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  openOfferDetails(offer: Offer) {
    this.dialog.open(AppOfferDetailsComponent, {
      data: {
        offerId: offer.id
      },
      width: '700px',
    });
  }
}
