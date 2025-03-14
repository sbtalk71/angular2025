import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-price',
    imports:[CommonModule],
    template: `
      @let discountedPrice = price * (1 - discount);
      <p>The discounted price is {{ discountedPrice | currency }}.</p>
    `
  })
  export class PriceComponent {
    price = 100;
    discount = 0.2; // 20% discount
  }
  