import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserStore } from '../../store/user.store';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-user',
  imports: [FormsModule],
  template: `
    <h2>Add User</h2>
    <form (ngSubmit)="addUser()">
      <label>Name: <input [(ngModel)]="name" name="name" required></label>
      <label>Email: <input [(ngModel)]="email" name="email" required></label>
      <button type="submit">Save</button>
    </form>
  `,
})
export class AddUserComponent {
  userStore = inject(UserStore);
  router = inject(Router);
  
  name = '';
  email = '';

  addUser() {
    const id = Math.floor(Math.random() * 1000);
    this.userStore.addUser({ id, name: this.name, email: this.email });
    this.router.navigate(['/users']);
  }
}
