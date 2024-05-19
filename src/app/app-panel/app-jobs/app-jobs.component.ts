import { Component, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { InputDialogService } from '../../services/input-dialog/input-dialog.service';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { AppOffersService } from '../app-offers/service/app-offers.service';
import { AppJobsService } from './service/app-jobs.service';
import { Job } from '../../models/job';
import { ClientPagination } from '../../types/client-pagination';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { ConfirmDialogService } from '../../services/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app-jobs.component.html',
  styleUrl: './app-jobs.component.scss'
})
export class AppJobsComponent {
  constructor(
    private errorHandler: ErrorHandlerService,
    private jobsService: AppJobsService,
    private snackbar: SnackBarService,
    private confirmDialog: ConfirmDialogService,
    private inputDialog: InputDialogService,
    private dialog: MatDialog,
  ) {}

  isLoading: boolean = false;
  displayedColumns = [
    'orderer', 
    'price', 
    'type',
    'status',
    'options'
  ];

  jobs: WritableSignal<Job[]> = signal([]);

  pagination: ClientPagination = {
    perPage: 10,
    page: 1,
    pageSizeOptions: [10, 20, 50, 100],
    defaultPageSize: 10,
    totalResults: 0,
  };

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.isLoading = true;
    this.jobsService.getJobs(this.pagination).subscribe({
      next: (result) => {
        this.jobs.set(result.data);
        this.pagination.totalResults = result.meta.total;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  markJobAsComplete(job: Job) {
    this.confirmDialog.open(
      'Želite li označiti posao kao završen?',
      'Označi kao završen',
      'Odustani'
    ).subscribe({
      next: (result) => {
        if (result) {
          this.jobsService.markJobAsComplete(job.id!).subscribe({
            next: (response) => {
              this.snackbar.open(response.data.message);
              this.getJobs();
            },
            error: (error) => {
              this.errorHandler.handleError(error);
            }
          });
        }
      }
    });
  } 

  openJobDetails(job: Job) {}
  
}
