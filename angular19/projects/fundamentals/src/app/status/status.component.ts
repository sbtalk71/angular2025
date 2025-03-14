import { Component } from "@angular/core";

@Component({
    selector: 'app-status',
    template: `
      @switch (status) {
        @case ('loading') {
          <p>Loading...</p>
        }
        @case ('success') {
          <p>Data loaded successfully!</p>
        }
        @case ('error') {
          <p>Error loading data.</p>
        }
        @default {
          <p>Unknown status.</p>
        }
      }
    `
  })
  export class StatusComponent {
    status = 'success';
  }
  