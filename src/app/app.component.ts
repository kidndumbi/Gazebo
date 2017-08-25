import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './services/firebase/auth.service';
import {Router} from "@angular/router";
import { MdSidenav } from "@angular/material";
import { FirebaseService } from './services/firebase/firebase.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  show: boolean = true;

  @ViewChild('sidenav') public myNav: MdSidenav;

    constructor(private auth: AuthService, private router: Router, private firebaseService: FirebaseService) {

         this.auth.getAuthenticatedUser().subscribe(user=>{

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


    // setUsersOnline(){

    //     this.firebaseService.getAuthenticatedUserProfile().subscribe(profile => {

    //             this.firebaseService.setUsersOnline(profile);
    //       });
    // }



    logout(){

       this.auth.logout();
 

    }

     ngOnInit() { 
            //  this.setUsersOnline();
    }


}
