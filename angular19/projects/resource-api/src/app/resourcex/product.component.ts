import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list',
  imports:[CommonModule],
  template: `
    <div *ngIf="productsResource.isLoading()">Loading...</div>
    <div *ngIf="productsResource.error()">Error: {{ productsResource.error() }}</div>
    <ul>
      <li *ngFor="let product of productsResource.value()">
        {{ product.title }} - {{ product.price | currency }}
      </li>
    </ul>
  `
})


export class ProductListComponent {

  productsResource = rxResource({
    loader: () => this.http.get<Product[]>('https://fakestoreapi.com/products')
  });

  constructor(private http: HttpClient) {}
}
