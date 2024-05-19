import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterLink,
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {

}
