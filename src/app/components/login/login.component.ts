import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { login } from '../../models/login.model';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

    @Output() loginEvent = new EventEmitter;
    @Output() registerEvent = new EventEmitter;
    email:string = ""
    password: string = ""
    constructor() { }

    login(){

        let logingData = {email: this.email, password: this.password}
         this.loginEvent.emit(logingData);  
     }

     register(){
         this.registerEvent.emit(true); 
     }

    ngOnInit() {
          
     }
}