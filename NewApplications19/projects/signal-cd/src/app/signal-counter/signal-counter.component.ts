// signal-counter.component.ts
import { Component, computed, DoCheck, inject, OnChanges, signal, SimpleChanges } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-signal-counter',
  template: `
    <p>Signal Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
  standalone: true
})
export class SignalCounterComponent{
  private service = inject(CounterService);
  count = this.service.count;


  constructor() {
    //console.log('SignalCounterComponent rendered');
  }

  increment() {
    this.service.increment();
  }
}
