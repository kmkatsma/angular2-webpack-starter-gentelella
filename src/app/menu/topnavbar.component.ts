import { Component } from '@angular/core';

@Component({
  selector: 'topnav-bar',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../app.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './topnavbar.component.html'
})
export class TopNavBar {
    // TypeScript public modifier
    constructor() {

    }

    toggleClicked(event: MouseEvent)
    {
        var target = event.srcElement.id;
        var body = $('body');
        var menu = $('#sidebar-menu');
        
        // toggle small or large menu
        if (body.hasClass('nav-md')) {
            menu.find('li.active ul').hide();
            menu.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            menu.find('li.active-sm ul').show();
            menu.find('li.active-sm').addClass('active').removeClass('active-sm');
        }
        body.toggleClass('nav-md nav-sm');

    }
  

  ngOnInit() {
    console.log('hello `topnavbar` component');
  }

  ngAfterViewInit(){
     
  }
 
}
