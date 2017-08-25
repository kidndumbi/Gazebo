import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";
import { profile } from '../../models/profile.model';
import { FirebaseService } from '../../services/firebase/firebase.service';


@Component({
    selector: 'registerPage',
    templateUrl: 'registerPage.component.html',
    styleUrls: ['registerPage.component.css']
})

export class RegisterPageComponent implements OnInit {


    // profileData: profile = { 
    //        first_name: "",
    //        last_name: "",
    //        email: "nicki@swango.com",
    //        nick_name: "",
    //        gender: "male",
    //        birthday: "",
    //        avatar: ""
    // };



    constructor(private auth: AuthService, private router: Router,private firebaseService: FirebaseService) { 

        this.auth.getAuthenticatedUser().subscribe(user=>{
            if(user){
             //this.router.navigate(['home']); 
            }
        })

    }



    async register(event){
 
     try{
          const result = await this.auth.register(event.userData.email, event.userData.password);

          console.log(result);

          if(result){
              event.profileData.$key = result.uid;
              console.log(event.profileData);

              this.firebaseService.saveProfile(event.profileData).then(result=>{

                        if(result){
                              console.log('success!')
                                  
                            this.router.navigate(['home']); 
                        }else{
                            console.log('failed!')
                        }

                    });


          }

                }catch(e){
                    
                    console.log(e.message);
                    
                
                }

      }




    ngOnInit() { }
}