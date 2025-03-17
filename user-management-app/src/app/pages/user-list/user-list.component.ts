import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/users', user.id]">{{ user.name }}</a>
      </li>
    </ul>
    <a routerLink="/users/add">Add User</a>
  `,
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
}
