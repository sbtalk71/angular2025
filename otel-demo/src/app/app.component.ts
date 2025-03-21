import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Angular OpenTelemetry Demo</h1>
    <button (click)="makeApiCall()">Make API Call</button>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  makeApiCall() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => console.log("API Response:", data))
      .catch((error) => console.error("API Error:", error));
  }
}
