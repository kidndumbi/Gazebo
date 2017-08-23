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


    profileData: profile = { 
           first_name: "",
           last_name: "",
           email: "",
           nick_name: "",
           gender: "male",
           birthday: "",
           avatar: ""
    };



    constructor(private auth: AuthService, private router: Router,private firebaseService: FirebaseService) { 

        this.auth.getAuthenticatedUser().subscribe(user=>{
            if(user){
             this.router.navigate(['home']); 
            }
        })

    }



    async register(event){
 
     try{
          const result = await this.auth.register(event.email, event.password);

          this.auth.getAuthenticatedUser().subscribe(data=>{  
         //console.log(data)
                    this.profileData.email = data.email;
                    this.firebaseService.saveProfile(this.profileData).then(data=>{

                         console.log('success!')
                        this.router.navigate(['profile']); 
      
                    });
                        
                    });
                    
                }catch(e){
                    
                    console.log(e.message);
                    
                
                }

      }




    ngOnInit() { }
}