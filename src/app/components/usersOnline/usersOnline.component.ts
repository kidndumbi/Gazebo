import { profile } from './../../models/profile.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import {  FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'users-online',
    templateUrl: 'usersOnline.component.html',
    styleUrls: ['usersOnline.component.css']
})

export class UsersOnlineComponent implements OnInit {

    @Output() selectedUser: EventEmitter<profile>;
    userList: FirebaseListObservable<profile[]>;

    constructor(private firebaseService: FirebaseService) { 
        
        this.selectedUser = new EventEmitter();
        this.getOnlineUsers();

    }

    setUsersOnline(){

        this.firebaseService.getAuthenticatedUserProfile().subscribe(profile => {
                  
                console.log(profile);
                this.firebaseService.setUsersOnline(profile);
          });
    }

    getOnlineUsers(){
    
           this.userList = this.firebaseService.getOnlineUsers();
         

    }

    selectUser(user: profile){
       
        this.selectedUser.emit(user);


    }

    ngOnInit() { 
             this.setUsersOnline();
    }
}