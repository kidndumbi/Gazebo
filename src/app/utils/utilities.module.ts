import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NotifySnackbarComponent } from './notifySnackbar/notifySnackbar.component';

@NgModule({
    imports: [BrowserModule , FormsModule],
    exports: [NotifySnackbarComponent],
    declarations: [NotifySnackbarComponent],
    providers: [],
})
export class UtitliesModule { }
