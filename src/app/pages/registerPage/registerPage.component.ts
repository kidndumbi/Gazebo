import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";


@Component({
    selector: 'registerPage',
    templateUrl: 'registerPage.component.html',
    styleUrls: ['registerPage.component.css']
})

export class RegisterPageComponent implements OnInit {

    email: string;
   password: string;
    loading = false;


    constructor(private auth: AuthService, private router: Router) { 

        this.auth.getAuthenticatedUser().subscribe(user=>{
            if(user){
             this.router.navigate(['home']); 
            }
        })

    }



    async register(email:string, password: string){
 
     try{
          const result = await this.auth.register(email, password);

          this.auth.getAuthenticatedUser().subscribe(data=>console.log(data))
          console.log('success!')
          this.router.navigate(['profile']); 
     }catch(e){
           
           console.log(e.message);
           this.auth.getAuthenticatedUser().subscribe(data=>console.log(data))
          //  this.auth.logout().then(a=>{console.log(a)})
          //  this.auth.getAuthenticatedUser().subscribe(data=>console.log(data))
     }

      }

    //   register() {
    //     this.loading = true;
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    //}



    ngOnInit() { }
}