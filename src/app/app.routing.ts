
import {  Routes } from '@angular/router';
import { MainToolPageComponent } from './pages/toolPages/mainToolPage.component';
import { HomePageComponent } from './pages/homePage/homepage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { ProfilePageComponent } from './pages/profilePage/profilePage.component';


export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {  }
  },
     {
    path: 'login',
    component: LoginPageComponent,
    data: {  }
  },
   {
    path: 'register',
    component: RegisterPageComponent,
    data: {  }
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
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

