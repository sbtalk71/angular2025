import { AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone:true,
  imports: [],
  template: `
    <div class="demo">
      child2 works!
      <p>Counter Value={{counter.count}}</p>
      
    </div>
  `,
  styleUrl: './child2.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component  implements DoCheck{
@Input() counter!:any;

constructor(){
  console.log("Child2Component refreshed..");
}
ngDoCheck(){
  console.log("Child2Component refreshed..");
}
}
