import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Counter: {{ count() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="double()">Double</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
})
export class CounterComponent {
  count = signal(0); // Create a signal with initial value 0

  constructor() {
    // Effect runs whenever `count` changes
    console.log("Component Created..")
    effect(() => {
      console.log('Counter changed:', this.count());
    });
  }

  // Using set() to directly assign a new value
  reset() {
    this.count.set(0);
  }

  // Using update() to modify the existing value
  increment() {
    this.count.update((value) => value + 1);
  }

  // Using update() for more complex modifications
  double() {
    this.count.update((value) => value * 2);
  }
}
