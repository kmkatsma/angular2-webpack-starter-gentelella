import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Content } from './content/content.component';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Content },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
