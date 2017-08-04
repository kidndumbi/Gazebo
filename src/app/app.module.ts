import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { MainToolPageComponent } from './pages/toolPages/mainToolPage.component';
import { HomePageComponent } from './pages/homePage/homepage.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { ProfilePageComponent } from './pages/profilePage/profilePage.component';
import { PrivateChatModalComponent } from './modals/privateChatModal.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { AngMaterialModule } from './modules/angMaterial.module';
import { MyComponentsModule } from './components/myComponents.module';

import { firebaseConfig  } from './configFiles/firebaseConfig';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase/firebase.service';
import { AuthService } from './services/firebase/auth.service';
import {FirebaseGuard } from './services/firebase/guard.service';


import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainToolPageComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    PrivateChatModalComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngMaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MyComponentsModule

  ],
    entryComponents: [
    PrivateChatModalComponent
  ],
  providers: [FirebaseService, AuthService, FirebaseGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
