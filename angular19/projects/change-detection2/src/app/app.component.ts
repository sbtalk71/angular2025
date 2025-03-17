import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <home></home>

    
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-detection2';
}
