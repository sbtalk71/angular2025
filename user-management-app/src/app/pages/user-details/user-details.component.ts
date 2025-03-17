import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-user-details',
  template: `<h2>User Details: {{ userId }}</h2>`,
})
export class UserDetailsComponent {
  userId: string | null;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
