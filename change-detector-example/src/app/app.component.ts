import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockPriceComponent } from './stock-price/stock-price.component';

@Component({
  selector: 'app-root',
  imports: [StockPriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-detector-example';
}
