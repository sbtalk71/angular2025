import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { MoveArrayComponent } from './move-array/move-array.component';

@Component({
  selector: 'app-root',
  imports: [SimpleComponent,MoveArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-drag-drop';
}
