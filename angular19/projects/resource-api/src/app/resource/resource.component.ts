import { CommonModule } from '@angular/common';
import { Component, signal, resource } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  template: `
    <div *ngIf="productResource.isLoading()">Loading...</div>
    <div *ngIf="productResource.error()">Error: {{ productResource.error() }}</div>
    <div *ngIf="productResource.value()">
      <h2>{{ productResource.value().name }}</h2>
      <p>Price: {{ productResource.value().price }}</p>
    </div>
  `
})
export class ResourceComponent {
  productId = signal(10);

  productResource = resource({
    request: this.productId,
    loader: async ({ request, abortSignal }) => {
      const response = await fetch(`https://fakestoreapi.com/products/${request}`, { signal: abortSignal });
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return response.json();
    }
  });

  nextProduct() {
    this.productId.update(id => id + 1);
  }
}
