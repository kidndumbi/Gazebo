import { NgModule } from '@angular/core';
import { AngMaterialModule } from '../modules/angMaterial.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [AngMaterialModule,FormsModule, BrowserModule],
    exports: [LoginComponent, RegisterComponent, ProfileComponent],
    declarations: [LoginComponent, RegisterComponent, ProfileComponent],
    providers: [],
})
export class MyComponentsModule { }
