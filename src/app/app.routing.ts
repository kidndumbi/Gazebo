
import {  Routes } from '@angular/router';
import { MainToolPageComponent } from './pages/toolPages/mainToolPage.component';
import { HomePageComponent } from './pages/homePage/homepage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { ProfilePageComponent } from './pages/profilePage/profilePage.component';
import { ChannelsPageComponent  } from './pages/channelsPage/channelsPage.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
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
    path: 'contact',
    component: ContactPageComponent,
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
    path: 'channels',
    component: ChannelsPageComponent,
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

