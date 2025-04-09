import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';
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
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child1Component implements DoCheck{

  constructor( private cdr: ChangeDetectorRef){
    //this.cdr.detach();
    console.log("Child1Component refreshed..")
  }
  @Input() counter!:any;

  ngDoCheck(){
    console.log("Child1Component refreshed..");
  }
}
