import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports:[],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

   a=20;
   b=30;
  c =this.a+this.b;

  num1=signal(2);
  num2=signal(4)

  num3=computed(this.num1()+this.num2())

  addNormal(){
    this.b=30;
    console.log(this.c);
  }

  addWithSignal(){
    //this.signalc
  }

}
