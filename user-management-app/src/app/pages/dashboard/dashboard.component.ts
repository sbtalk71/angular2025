import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-dashboard',
  template: `<h2>Dashboard</h2><a routerLink="/users">Go to Users</a>`,
})
export class DashboardComponent {}
