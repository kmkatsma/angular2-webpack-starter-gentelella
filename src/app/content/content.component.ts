import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'content',
  //styleUrls: ["../../styles.css"],
  templateUrl: './content.component.html'
})
export class ContentComponent {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor() {}

  ngOnInit() {
    console.log('hello `Content` component');
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.localState.value = '';
  }
}
