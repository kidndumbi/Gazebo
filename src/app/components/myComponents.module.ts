import { NgModule } from '@angular/core';
import { AngMaterialModule } from '../modules/angMaterial.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatCanvasComponent } from './chatCanvas/chatCanvas.component';
import { UsersOnlineComponent } from './usersOnline/usersOnline.component';
import { ChatHistoryComponent } from './chatHistory/chatHistory.component';
import { SendMessageBoxComponent } from  '../components/sendMessageBox/sendMessageBox.component';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarSelectModalComponent } from '../modals/avatarSelect/avatarSelectModal.component';
import { ChatHistoryItemComponent } from '../components/chatHistory/chatHistoryItem/chatHistoryItem.component';


@NgModule({
    imports: [AngMaterialModule,
        FormsModule,
         BrowserModule,
         BrowserAnimationsModule
        ],
    exports: [LoginComponent, 
        RegisterComponent, 
        ProfileComponent, 
        ChatCanvasComponent,
        SendMessageBoxComponent, 
        UsersOnlineComponent,
    ChatHistoryComponent],
    declarations: [LoginComponent,
         RegisterComponent, 
         ProfileComponent, 
         ChatCanvasComponent, 
         AvatarSelectModalComponent,
         SendMessageBoxComponent,
          UsersOnlineComponent,
          ChatHistoryItemComponent,
        ChatHistoryComponent],
         
    providers: [],
       entryComponents: [
       AvatarSelectModalComponent
  ],
})
export class MyComponentsModule { }
