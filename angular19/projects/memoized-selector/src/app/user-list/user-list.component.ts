// user-list.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { AppState } from '../app.state';
import { getActiveUsersManually, selectActiveUsers } from '../store/user.selectcors';
import { toggleUserStatus, updateSettings } from '../store/users.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports:[CommonModule],
  template: `
    <h3>Active Users</h3>
    <ul>
      <li *ngFor="let user of activeUsers$ | async">
        {{ user.name }}
        <button (click)="toggleStatus(user.id)">Toggle</button>
      </li>
    </ul>
    <button (click)="changeSettings()">Update Settings (Test Memoization)</button>
  `
})
export class UserListComponent {
  activeUsers$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.activeUsers$ = this.store.select(selectActiveUsers);
   // this.activeUsers$ = this.store.select(getActiveUsersManually);
  }

  toggleStatus(userId: number) {
    this.store.dispatch(toggleUserStatus({ userId }));
  }

  changeSettings() {
    this.store.dispatch(updateSettings({ theme: 'dark' }));
  }
}
