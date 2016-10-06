import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'content',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../app.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './content.component.html'
})
export class Content {
  // Set our default values
  localState = { value: '' };
 
  // TypeScript public modifiers
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `Content` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
 
    

        
     