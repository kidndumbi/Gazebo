import { Component, ViewChild } from '@angular/core';
import { AuthService } from './services/firebase/auth.service';
import {Router} from "@angular/router";
import { MdSidenav } from "@angular/material";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show: boolean = true;

  @ViewChild('sidenav') public myNav: MdSidenav;

    constructor(private auth: AuthService, private router: Router) {

         this.auth.getAuthenticatedUser().subscribe(user=>{
           
           console.log(user)
           if(!user){
              this.myNav.close()
              this.show = false;
              this.router.navigate(['login']); 
           }else{
             this.myNav.open()
             this.show = true;
           }
          
        })

     }


    logout(){

       this.auth.logout();
 

    }


}
