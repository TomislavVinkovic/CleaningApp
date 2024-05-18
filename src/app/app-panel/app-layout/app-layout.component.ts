import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppToolbarComponent } from '../ui/app-toolbar/app-toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    AppToolbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
