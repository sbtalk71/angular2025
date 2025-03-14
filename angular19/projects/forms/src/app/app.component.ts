import { Component } from '@angular/core';
import { Reactiveforms1Component } from "./reactiveforms1/reactiveforms1.component";

@Component({
  selector: 'app-root',
  imports: [Reactiveforms1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
