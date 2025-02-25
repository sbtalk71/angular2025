import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStore } from '../../store/user.store';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-user',
  imports: [FormsModule],
  template: `
    <h2>Edit User</h2>
    <form (ngSubmit)="updateUser()">
      <label>Name: <input [(ngModel)]="user.name" name="name" required></label>
      <label>Email: <input [(ngModel)]="user.email" name="email" required></label>
      <button type="submit">Update</button>
    </form>
  `,
})
export class EditUserComponent {
  userStore = inject(UserStore);
  route = inject(ActivatedRoute);
  router = inject(Router);
  
  user = { id: 0, name: '', email: '' };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const existingUser = this.userStore.users().find(u => u.id === id);
    if (existingUser) this.user = { ...existingUser };
  }

  updateUser() {
    this.userStore.updateUser(this.user);
    this.router.navigate(['/users']);
  }
}
