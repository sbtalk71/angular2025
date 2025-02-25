import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts17';
}
