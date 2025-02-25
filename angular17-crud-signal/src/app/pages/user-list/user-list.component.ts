import { Component, inject } from '@angular/core';
import { UserStore } from '../../store/user.store';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of userStore.users()">
        <a [routerLink]="['/users', user.id]">{{ user.name }}</a>
        <button (click)="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
    <button [routerLink]="['/users/add']">Add User</button>
  `,
})
export class UserListComponent {
  userStore = inject(UserStore);

  deleteUser(id: number) {
    this.userStore.deleteUser(id);
  }
}
