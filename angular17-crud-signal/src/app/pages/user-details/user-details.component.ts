import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStore } from '../../store/user.store';

@Component({
  standalone: true,
  selector: 'app-user-details',
  template: `
    <h2>User Details</h2>
    <p>Name: {{ user?.name }}</p>
    <p>Email: {{ user?.email }}</p>
  `,
})
export class UserDetailsComponent {
  userStore = inject(UserStore);
  route = inject(ActivatedRoute);

  user = this.userStore.users().find(u => u.id === Number(this.route.snapshot.paramMap.get('id')));
}
