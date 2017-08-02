
import {  Routes } from '@angular/router';
import { MainToolPageComponent } from './pages/toolPages/mainToolPage.component';
import { HomePageComponent } from './pages/homePage/homepage.component';


export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {  }
  },
    {
    path: 'tools',
    component: MainToolPageComponent,
    data: {  }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',     
    redirectTo: '/home',
    pathMatch: 'full' }
];

