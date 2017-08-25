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
 
    logingData: login = {email: "", password: ""};

    constructor() { }

    login(loginForm: HTMLFormElement){

        console.log(loginForm);
        console.log(this.logingData);

        if(loginForm.valid){
        this.loginEvent.emit(this.logingData); 
        }

     }

     register(){
         this.registerEvent.emit(true); 
     }



    ngOnInit() {
          
     }
}