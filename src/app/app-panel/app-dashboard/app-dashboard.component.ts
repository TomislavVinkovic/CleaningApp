import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppToolbarComponent } from '../ui/app-toolbar/app-toolbar.component';

@Component({
  selector: 'app-app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AppToolbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app-dashboard.component.html',
  styleUrl: './app-dashboard.component.scss'
})
export class AppDashboardComponent {

}
