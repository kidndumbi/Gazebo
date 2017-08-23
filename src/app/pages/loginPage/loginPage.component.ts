import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";
import {MdSnackBar} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'loginPage',
    templateUrl: 'loginPage.component.html',
    styleUrls: ['loginPage.component.css'],
        animations: [
        trigger('clickedState', [
            state('default', style({
                backgroundColor: 'green',
                width: '100px',
                height: '100px'
            })),
              state('clicked', style({
                backgroundColor: 'blue',
                width: '300px',
                height: '50px'
            })),
             transition('default => clicked', animate('1s 3s ease-in')),
             transition('clicked => default', animate('1s 3s ease-out'))
        ])
    ]
})

export class LoginPageComponent implements OnInit {

    clickInfo:string = 'default';


    constructor(private auth: AuthService, private router: Router, private snackBar: MdSnackBar) { 

        this.auth.getAuthenticatedUser().subscribe(user=>{
            if(user){
             this.router.navigate(['home']); 
            }
        })

    }


     async login(event){

         try{
          const result = await this.auth.login(event.email, event.password)
       
          this.router.navigate(['home']); 
          
          

        }catch(e){
            console.log(e.message);
            this.openSnackBar(e.message);
        }

  }


  register(event){
      this.router.navigate(['register'])

  }

    openSnackBar(error) {
        let snackBarRef = this.snackBar.open("Failed!!  " + error,"", {
         duration: 3000
       } );
    }



    //////remove later
    hu(){
    
        this.clickInfo = 'clicked';

    setTimeout(() => {
      this.clickInfo = 'default';
    },500);
    }

 
     //////remove later end


  ngOnInit() { }
}