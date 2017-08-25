import { Component, OnInit, OnDestroy } from '@angular/core';
import { profile } from '../../models/profile.model';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AuthService } from '../../services/firebase/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
import {MdSnackBar} from '@angular/material';
import { NotifySnackbarComponent }  from '../../utils/notifySnackbar/notifySnackbar.component';
import { AvatarSelectModalComponent } from '../../modals/avatarSelect/avatarSelectModal.component';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

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
           birthday: "",
           avatar: "",
           $key:""
    };
  


    constructor(private firebaseService: FirebaseService, private auth: AuthService,
         public snackBar: MdSnackBar, public dialog: MdDialog) { 

            this.firebaseService.getAuthenticatedUserProfile().subscribe(profileData=>{  
                  
                    this.profileData = profileData;
                    console.log(this.profileData);
            })

        // this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{
        //     this.authenticatedUser = user;

        //     this.firebaseService.getProfile(this.authenticatedUser).subscribe(profileData=>{                   
        //             //console.log(profileData);
        //             this.profileData = profileData;
        //             console.log(profileData);

        //     })

        // });
    }

    async saveProfile(){

         //this.profileData.birthday = this.profileData.birthday.toString();

         console.log(this.profileData);

            //this.profileData.email = this.authenticatedUser.email;
            const result = await this.firebaseService.saveProfile( this.profileData);
            //console.log(result);
            if(result){
              this.openSnackBar();
            }
 
    }

    openSnackBar() {
        let snackBarRef = this.snackBar.open('Profile Updated!',"", {
         duration: 1000
       } );
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

     ngOnDestroy() { 

        //this.authenticatedUser$.unsubscribe();
     }
}