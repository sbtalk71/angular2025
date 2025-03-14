import { Component, computed, signal } from '@angular/core';
import { ExampleComponent } from "../example/example.component";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {


  a:number = 20;
  b:number= 30;
  sum = this.a + this.b;

  changeA() {
    this.a = this.a+2;
  console.log("Value of a = "+this.a);
  }


  //signals
  x=signal(4);
  y=signal(6);
  z=computed(()=>this.x()+this.y());
  changeX(){
 this.x.update(v=>v+20);
  }

}
