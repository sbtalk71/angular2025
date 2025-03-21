import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  imports:[FormsModule],
  template: `
    <h2>Edit Profile</h2>
    <input [(ngModel)]="profileData" placeholder="Edit your profile">
    <button (click)="save()">Save</button>
    <nav>
    <a href="/admin">Go to Home</a>
    </nav>
  `
})
export class EditComponent {
  profileData: string = '';
  saved: boolean = false;

  save() {
    this.saved = true;
    alert('Profile saved!');
  }

  deactivate(): boolean {
    if (!this.saved) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
  canExit() : boolean {
 
    if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }
}
