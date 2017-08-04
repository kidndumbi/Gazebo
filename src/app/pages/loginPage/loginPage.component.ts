import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'loginPage',
    templateUrl: 'loginPage.component.html',
    styleUrls: ['loginPage.component.css']
})

export class LoginPageComponent implements OnInit {


    constructor(private auth: AuthService, private router: Router) { 

        this.auth.getAuthenticatedUser().subscribe(user=>{
            if(user){
             this.router.navigate(['home']); 
            }
        })

    }


     async login(event){

        console.log(event);

         try{
          const result = await this.auth.login(event.email, event.password)
          console.log("success");
          this.router.navigate(['home']); 
          
          

        }catch(e){
            console.log(e.message);
        }

  }


  register(event){

      this.router.navigate(['profile'])

  }


  ngOnInit() { }
}