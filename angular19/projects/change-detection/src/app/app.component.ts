import { Component } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  imports: [Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-detection';
  counter={
    count:0
  };

  increment(){
    this.counter.count=this.counter.count+1;
  }

  updateCount(){
    this.counter={count:this.counter.count+4};
  }
}
