import { NgModule } from '@angular/core';
import { AngMaterialModule } from '../modules/angMaterial.module';
import { LoginComponent } from './login/login.component';
import { FormsModule }    from '@angular/forms';

@NgModule({
    imports: [AngMaterialModule,FormsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class MyComponentsModule { }
