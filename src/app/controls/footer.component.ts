import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'custom-footer',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../app.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './footer.component.html'
})
export class Footer {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Footer` component');
  }
 
}
