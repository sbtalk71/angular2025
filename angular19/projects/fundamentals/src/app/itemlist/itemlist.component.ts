import { Component } from "@angular/core";

@Component({
    selector: 'app-item-list',
    template: `
      <ul>
        @for (item of items; track item.id) {
          <li>{{ item.name }}</li>
        }
      </ul>
    `
  })
  export class ItemListComponent {
    items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }
  