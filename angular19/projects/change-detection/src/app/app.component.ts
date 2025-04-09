import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  imports: [Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{
  
  title = 'change-detection';
  counter={
    count:0
  };
constructor(){
  console.log("AppComponent refreshed..")
}
  increment(){
    this.counter.count=this.counter.count+1;
  }

  updateCount(){
    this.counter={count:this.counter.count+4};
  }

  ngDoCheck(){
    console.log("AppComponent refreshed..");
  }
}
