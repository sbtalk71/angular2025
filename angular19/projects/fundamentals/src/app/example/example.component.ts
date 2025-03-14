import { Component } from "@angular/core";

@Component({
    selector: 'app-example',
    template: `
      @if (isLoggedIn) {
        <p>Welcome back, {{ user.name }}!</p>
      } @else {
        <p>Please log in.</p>
      }
    `
  })
  export class ExampleComponent {
    isLoggedIn = true;
    user = { name: 'Alice' };
  }
  