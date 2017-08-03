import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'loginPage',
    templateUrl: 'loginPage.component.html',
    styleUrls: ['loginPage.component.css']
})

export class LoginPageComponent implements OnInit {

      email: string;
   password: string;
    loading = false;

    constructor(private auth: AuthService, private router: Router) { }


     async login(email:string, password: string){

         try{
          const result = await this.auth.login(email, password)
          console.log("success");
          this.router.navigate(['home']); 
          
          

        }catch(e){
        
        }

  }


    // login() {
    //     this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    //}


    ngOnInit() { }
}