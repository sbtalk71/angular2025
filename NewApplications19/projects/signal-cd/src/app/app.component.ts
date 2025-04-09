import { Component } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';

@Component({
  selector: 'app-root',
  imports: [DummyComponent,SignalCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-cd';
}
