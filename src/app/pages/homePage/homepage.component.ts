import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";



@Component({
    selector: 'homePage',
    templateUrl: 'homePage.component.html'
})

export class HomePageComponent implements OnInit {
    constructor(private fire: FirebaseService, private auth: AuthService, private router: Router) {

          this.auth.getAuthenticatedUser().subscribe(user=>{
              
            //   console.log(user)
            //   if(!user){
            //       this.router.navigate(['login']); 
            //   }
            
        })
        
     }

    



    ngOnInit() { }
}