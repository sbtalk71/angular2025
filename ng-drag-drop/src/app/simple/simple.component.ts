import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple',
  imports: [CdkDrag,CommonModule],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
