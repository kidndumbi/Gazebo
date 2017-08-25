import { profile } from './../../models/profile.model';
import { Component, OnInit, OnDestroy,AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AuthService } from '../../services/firebase/auth.service';
import {Router} from "@angular/router";
import {  FirebaseListObservable } from 'angularfire2/database';
import { PrivateChatModalComponent } from '../../modals/privateChatModal.component';
import { ChatService } from '../../services/firebase/chat.service';
import { MdDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
//import { Channel } from '../../models/channel.model';
import 'rxjs/add/operator/map';




@Component({
    selector: 'homePage',
    templateUrl: 'homePage.component.html',
    styleUrls: ['homePage.component.css']
})

export class HomePageComponent implements OnInit , OnDestroy, AfterViewChecked{

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  disableScrollDown = false;

    publicChats: FirebaseListObservable<any[]>;
    //temporay
     //channels: FirebaseListObservable<Channel[]>;
    //private authenticatedUser$: Subscription;
    userProfile: profile;
    chatText: string;



    constructor(private firebaseService: FirebaseService, private auth: AuthService, private router: Router, 
        private chat: ChatService, public dialog: MdDialog) {

          this.publicChats =  chat.getAllpublicChats();

            this.firebaseService.getAuthenticatedUserProfile().subscribe(profile => {

                this.userProfile = profile;
                
          });

          // this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{
          //   this.authenticatedUser = user;

          // });

     }

     submitChat(chatText: Event){

        let result = this.chat.submitPublicChat(chatText.toString());

     }


     triggerModal(guestProfile: profile){

         if(guestProfile.$key !== this.userProfile.$key){
                this.launchModal(guestProfile);
         }

     }


         ///modal
    launchModal(guestProfile: profile){

         let dialogRef = this.dialog.open(PrivateChatModalComponent, {
             width: '500px',
             height: '600px',
             data: {
                    guestProfile: guestProfile,
                    userProfile: this.userProfile
                  }
         });

         dialogRef.afterClosed().subscribe(result=>{
            
         });

    }



      ngOnDestroy() { 

        //this.authenticatedUser$.unsubscribe();
     }



    ngOnInit() {
         this.scrollToBottom();
     }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }



  scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }
}