import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeToolbarComponent } from '../ui/home-toolbar/home-toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-layout',
  standalone: true,
  imports: [
    CommonModule,
    HomeToolbarComponent,
    RouterOutlet,
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
