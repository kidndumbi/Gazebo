import { Component, OnInit } from '@angular/core';
import { profile } from '../../models/profile.model';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AuthService } from '../../services/firebase/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {

private authenticatedUser$: Subscription;
private authenticatedUser: User;
    selectedGenderValue: string;

  genders = [
    {value: 'male', viewValue: 'male'},
    {value: 'female', viewValue: 'female'},

  ];

        profileData: profile = { 
           first_name: "",
           last_name: "",
           email: "",
           nick_name: "",
           gender: "male",
           birthday: new Date()
    };


    constructor(private firebaseService: FirebaseService, private auth: AuthService) { 

        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{

        });
    }

    async saveProfile(){

        if(this.authenticatedUser){
            const result = await this.firebaseService.saveProfile(this.authenticatedUser, this.profileData);
            console.log(result);
        }
        
       
    }

    ngOnInit() { }
}