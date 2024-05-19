import { Component, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { InputDialogService } from '../../services/input-dialog/input-dialog.service';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { ClientPagination } from '../../types/client-pagination';
import { AppOffersService } from './service/app-offers.service';
import { AppOfferDetailsComponent } from '../app-offer-details/app-offer-details.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-app-offers',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app-offers.component.html',
  styleUrl: './app-offers.component.scss'
})
export class AppOffersComponent {
  constructor(
    private errorHandler: ErrorHandlerService,
    private offersService: AppOffersService,
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
