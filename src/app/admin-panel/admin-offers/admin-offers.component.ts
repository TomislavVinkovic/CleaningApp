import { Component } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AdminOffersService } from './service/admin-offers.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog/confirm-dialog.service';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-admin-offers',
  standalone: true,
  imports: [],
  templateUrl: './admin-offers.component.html',
  styleUrl: './admin-offers.component.scss'
})
export class AdminOffersComponent {
  constructor(
    private errorHandler: ErrorHandlerService,
    private offersService: AdminOffersService,
    private snackbar: SnackBarService,
    private confirmDialog: ConfirmDialogService,
    private dialog: MatDialog,
  ) {}

  isLoading: boolean = false;
  displayedColumns = [
    'orderer', 
    'offerer', 
    'type',
    'status',
    'price',
    'options'
  ];
}
