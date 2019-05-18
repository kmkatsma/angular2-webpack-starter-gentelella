import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { NetworkActivitiesComponent } from './content/network-activities/network-activities.component';
import * as jQuery from 'jquery';

export const AppRoutes2: Routes = [
  { path: '', component: ContentComponent },
  /*{ path: 'inbox',  component: Inbox },
  { path: 'about', component: About },*/
  { path: '**', component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoContentComponent,
    ContentComponent,
    TopNavBarComponent,
    FontAwesomeDirective,
    Footer,
    NetworkActivitiesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes2, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
