
import {  Routes } from '@angular/router';
import { MainToolPageComponent } from './pages/toolPages/mainToolPage.component';
import { HomePageComponent } from './pages/homePage/homepage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { ProfilePageComponent } from './pages/profilePage/profilePage.component';
import {FirebaseGuard } from './services/firebase/guard.service';


export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {  },
    canActivate: [FirebaseGuard]
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
    canActivate: [FirebaseGuard],
    data: {  }
  },
    {
    path: 'tools',
    component: MainToolPageComponent,
    data: {  }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',     
    redirectTo: '/login',
    pathMatch: 'full' }
];

