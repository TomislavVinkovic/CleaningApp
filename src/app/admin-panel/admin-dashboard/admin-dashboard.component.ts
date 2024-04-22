import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AdminToolbarComponent } from '../ui/admin-toolbar/admin-toolbar.component';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AdminToolbarComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  constructor(
    private auth: AuthService
  ) {}
}
