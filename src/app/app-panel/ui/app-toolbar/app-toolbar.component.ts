import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppMaterialModule } from '../../../app-material.module';
import { AuthService } from '../../../services/api/auth/auth.service';

@Component({
  selector: 'app-app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterLink,
  ],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.scss'
})
export class AppToolbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout().subscribe({
      next: _ => this.router.navigate(['/app/login'])
    });
  }
}
