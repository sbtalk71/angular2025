import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  standalone:true,
  imports: [Child2Component],
  template: `
    <div class="demo">
      child1 works!
      <p>Counter Value={{counter.count}}
      <app-child2 [counter]="counter"></app-child2>
    </div>
    
  `,
  styleUrl: './child1.component.css',
  changeDetection:ChangeDetectionStrategy.Default
})
export class Child1Component {

  @Input() counter!:any;
}
