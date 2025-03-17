import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <div class="card">
      <h3>{{ user.name }}</h3>
      <p>Email: {{ user.email }}</p>
      <button (click)="deleteUser()">Delete</button>
    </div>
  `,
  styles: ['.card { border: 1px solid #ccc; padding: 10px; margin: 5px; }']
})
export class UserCardComponent {
  @Input() user: any;  // Receiving user data from parent
  @Output() delete = new EventEmitter<number>(); // Event to notify parent

  deleteUser() {
    this.delete.emit(this.user.id); // Emit user ID for deletion
  }
}
