import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AppMaterialModule } from '../../../app-material.module';
import { AuthService } from '../../../services/api/auth/auth.service';

@Component({
  selector: 'home-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppMaterialModule,
    RouterModule,
  ],
  templateUrl: './home-toolbar.component.html',
  styleUrl: './home-toolbar.component.scss'
})
export class HomeToolbarComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
}
