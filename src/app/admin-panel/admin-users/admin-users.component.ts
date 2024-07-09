import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AdminUsersService } from './service/admin-users.service';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientPagination } from '../../types/client-pagination';
import { User } from '../../models/user';
import { SnackBarService } from '../../services/snack-bar/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog/confirm-dialog.service';
import { AdminUserDetailsComponent } from '../admin-user-details/admin-user-details.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit {

  constructor(
    private errorHandler: ErrorHandlerService,
    private usersService: AdminUsersService,
    private snackbar: SnackBarService,
    private confirmDialog: ConfirmDialogService,
    private dialog: MatDialog,
  ) {}
  
  isLoading: boolean = false;
  displayedColumns = [
    'username', 
    'email', 
    'role', 
    'verified', 
    'options'
  ];
  
  users: WritableSignal<User[]> = signal([]);

  pagination: ClientPagination = {
    perPage: 10,
    page: 1,
    pageSizeOptions: [10, 20, 50, 100],
    defaultPageSize: 10,
    totalResults: 0,
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.usersService.getUsers(this.pagination).subscribe({
      next: (data) => {
        this.users.set(data.data);
        this.pagination.totalResults = data.meta.total;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorHandler.handleError(error);
        this.isLoading = false;
      }
    });
  }

  verifyUserConfirmed(user: User) {
    this.snackbar.open('Verifikacija u tijeku...');
    this.usersService.verifyUser(user.id!).subscribe({
      next: (response) => {
        this.snackbar.open(response.data.message);
        this.getUsers();
      },
      error: (error) => {
        this.snackbar.dismiss();
        this.errorHandler.handleError(error);
      }
    });
  }

  verifyUser(user: User) {
    this.confirmDialog.open(
      'Jeste li sigurni da želite verificirati ovog korisnika?',
      'Verificiraj korisnika',
      'Odustani'
    ).subscribe(answer => {
      if(answer) {
        this.verifyUserConfirmed(user);
      }
    
    });
  }

  deactivateUserConfirmed(user: User) {
    this.snackbar.open('Deaktivacija u tijeku...');
    this.usersService.deactivateUser(user.id!).subscribe({
      next: (response) => {
        this.snackbar.open(response.data.message);
        this.getUsers();
      },
      error: (error) => {
        this.snackbar.dismiss();
        this.errorHandler.handleError(error);
      }
    });
  
  }
  deactivateUser(user: User) {
    this.confirmDialog.open(
      'Jeste li sigurni da želite deaktivirati ovog korisnika?',
      'Deaktiviraj korisnika',
      'Odustani'
    ).subscribe(answer => {
      if(answer) {
        this.deactivateUserConfirmed(user);
      }
    });
  }


  resetPasswordConfirmed(user: User) {
    this.snackbar.open('Resetiranje lozinke u tijeku...');
    this.usersService.resetPassword(user.id!).subscribe({
      next: (response) => {
        this.snackbar.open(response.data.message);
        this.getUsers();
      },
      error: (error) => {
        this.snackbar.dismiss();
        this.errorHandler.handleError(error);
      }
    });
  }

  resetPassword(user: User) {
    this.confirmDialog.open(
      'Jeste li sigurni da resetirati lozinku ovom korisniku?',
      'Resetiraj lozinku',
      'Odustani'
    ).subscribe(answer => {
      if(answer) {
        this.resetPasswordConfirmed(user);
      }
    });
  } 

  openUserDetails(user: User) {
    this.dialog.open(AdminUserDetailsComponent, {
      data: {
        userId: user.id,
      },
      width: '600px',
    });
  }

}
