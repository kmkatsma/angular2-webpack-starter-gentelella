import { Component } from "@angular/core";

@Component({
  selector: "custom-footer", // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: "./footer.component.html"
})
export class Footer {
  // TypeScript public modifiers
  constructor() {}
}
