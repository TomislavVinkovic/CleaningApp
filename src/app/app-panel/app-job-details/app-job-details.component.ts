import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminUserDetailsComponent } from '../../admin-panel/admin-user-details/admin-user-details.component';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AppOffersService } from '../app-offers/service/app-offers.service';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';
import { AppJobsService } from '../app-jobs/service/app-jobs.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-app-job-details',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  templateUrl: './app-job-details.component.html',
  styleUrl: './app-job-details.component.scss'
})
export class AppJobDetailsComponent implements OnInit {
  constructor(
    // mat dialog ref and dialog data
    @Inject(MAT_DIALOG_DATA) public data: { jobId: string },
    public dialogRef: MatDialogRef<AdminUserDetailsComponent>,

    private jobsService: AppJobsService,
    private errorHandler: ErrorHandlerService,
  ) {}

  job?: Job;
  isLoading: boolean = false;

  fetchData() {
    this.isLoading = true;
    this.jobsService.getJobDetails(this.data.jobId).subscribe({
      next: (data) => {
        console.log(this.data.jobId);
        this.job = data.job;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onClose() {
    this.dialogRef.close();
  }
}
