import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AdminUsersService } from './service/admin-users.service';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientPagination } from '../../types/client-pagination';
import { User } from '../../models/user';

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
    private usersService: AdminUsersService
  ) {}
  
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

  getUsers() {
    this.usersService.getUsers(this.pagination).subscribe({
      next: (data) => {
        console.log(data);
        this.users.set(data.data);
        this.pagination.totalResults = data.meta.total;
        console.log(this.users());
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }

  deactivateUser(user: User) {
    // TODO: deactivate user
  }
  resetPassword(user: User) {
    // TODO: reset password by email
  } 

  ngOnInit(): void {
    this.getUsers();
  }

}
