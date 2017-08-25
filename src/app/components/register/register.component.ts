import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { profile } from '../../models/profile.model';
import { AvatarSelectModalComponent } from '../../modals/avatarSelect/avatarSelectModal.component';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    @Output() registerEvent = new EventEmitter;

        selectedGenderValue: string;

  genders = [
    {value: 'male', viewValue: 'male'},
    {value: 'female', viewValue: 'female'},

  ];


    userData:any = {
       email: "", password: ""
    }

    loading = false;

    profileData: profile = { 
           first_name: "",
           last_name: "",
           email: "",
           nick_name: "",
           gender: "male",
           birthday: "",
           avatar: "https://png.icons8.com/mushroom/color/96",
           $key:""
    };


    constructor( public dialog: MdDialog) { }

    register(formData: HTMLFormElement){

        console.log(formData);

         let registerData = {
             userData: this.userData,
             profileData: this.profileData

         }
         //registerData.profileData.email = this.userData.email;

         console.log(registerData);
         //this.registerEvent.emit(registerData); 

    }

            ///modal
    launchAvatarModal(){

         let dialogRef = this.dialog.open(AvatarSelectModalComponent, {
             width: '500px',
             height: '600px',
             data: {yams: 'i am super yams', coco: 'i like coconut'}
         });

         dialogRef.afterClosed().subscribe(result=>{
              
              if(result){
                 this.profileData.avatar = result;
              }
              
         });

    }

    ngOnInit() { }
}