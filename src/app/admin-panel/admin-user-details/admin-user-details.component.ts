import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminUsersService } from '../admin-users/service/admin-users.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-admin-user-details',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  templateUrl: './admin-user-details.component.html',
  styleUrl: './admin-user-details.component.scss'
})
export class AdminUserDetailsComponent implements OnInit {
  
  constructor(
    // mat dialog ref and dialog data
    @Inject(MAT_DIALOG_DATA) public data: { userId: string },
    public dialogRef: MatDialogRef<AdminUserDetailsComponent>,

    private usersService: AdminUsersService,
    private errorHandler: ErrorHandlerService,
  ) {}
  
  user?: User;
  isLoading: boolean = false;

  fetchData() {
    this.isLoading = true;
    this.usersService.getUserDetails(this.data.userId).subscribe({
      next: (data) => {
        this.user = data.user;
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
