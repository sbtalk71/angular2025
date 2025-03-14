import { Component } from '@angular/core';
import { ResourceComponent } from './resource/resource.component';
import { ProductListComponent } from './resourcex/product.component';

@Component({
  selector: 'app-root',
  imports: [ResourceComponent,ProductListComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-product></app-product>
    <app-product-list></app-product-list>

    
  `,
  styles: [],
})
export class AppComponent {
  title = 'resource-api';
}
