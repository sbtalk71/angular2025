import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignalsComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentals';
}
