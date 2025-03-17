import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {
  stockPrice: number = 100;
  isManualUpdate: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Simulating stock price updates from a WebSocket or API every 3 seconds
    setInterval(() => {
      this.stockPrice = this.getRandomStockPrice();
      
      if (this.isManualUpdate) {
        console.log("detect changes ....")
        this.cdr.detectChanges(); // Manually trigger change detection
      }
    }, 3000);
  }

  getRandomStockPrice(): number {
    return Math.floor(100 + Math.random() * 50);
  }

  // Example of marking component for change detection
  markForCheck(): void {
    this.isManualUpdate = true;
    this.cdr.markForCheck(); // Mark the component for change detection in the next cycle
  }

  // Example of detaching and reattaching change detection
  toggleChangeDetection(): void {
    console.log(this.isManualUpdate)
    if (this.isManualUpdate) {
      this.cdr.detach(); // Stops automatic change detection
      this.isManualUpdate = false;
    } else {
      this.cdr.reattach(); // Resumes change detection
      this.isManualUpdate = true;
    }
  }
}
