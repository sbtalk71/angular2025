// dummy.component.ts
import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `<p>Dummy Component</p>`,
  standalone: true
})
export class DummyComponent {
  constructor() {
    console.log('DummyComponent rendered');
  }

  
}
