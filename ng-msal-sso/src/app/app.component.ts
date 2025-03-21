import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-auth></app-auth>`,
  imports: [AuthComponent]
})
export class AppComponent { }
