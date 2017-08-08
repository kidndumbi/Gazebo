import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    @Output() registerEvent = new EventEmitter;

        email: string;
   password: string;
    loading = false;


    constructor() { }

    register(){

             let registerData = {email: this.email, password: this.password}
         this.registerEvent.emit(registerData); 

    }

    ngOnInit() { }
}