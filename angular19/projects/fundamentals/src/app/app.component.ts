import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { CounterComponent } from './counter/counter.component';
import { ExampleComponent } from './example/example.component';
import { StatusComponent } from './status/status.component';
import { ItemListComponent } from './itemlist/itemlist.component';
import { PriceComponent } from './price/price.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignalsComponent,CounterComponent,ExampleComponent,StatusComponent,ItemListComponent,PriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentals';
}
