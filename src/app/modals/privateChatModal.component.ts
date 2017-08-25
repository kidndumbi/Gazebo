import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import { Component, OnInit, Inject,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import { profile } from '../models/profile.model';
import { message } from '../models/message.model';
import { ChatService } from '../services/firebase/chat.service';

@Component({
    selector: 'PrivateChatModal',
    templateUrl: 'PrivateChatModal.component.html'
})

export class PrivateChatModalComponent implements OnInit {

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    
    guestProfile: profile;
    userProfile: profile;
    message: message = {
        userFromId: "",
    userFromProfile: {
        first_name: "",
        last_name: ""
    },

    userToId: "",

    userToProfile: {
        first_name: "",
        last_name: ""
    },

    content: "",
    dateTime: null
    }

    messageList: Observable<message[]>;
    

    constructor(public thisDialogRef: MdDialogRef<PrivateChatModalComponent> , @Inject(MD_DIALOG_DATA) public data: any,
    private chat:ChatService) { 
     
       this.guestProfile = data.guestProfile;
       this.userProfile = data.userProfile;

       this.message.userFromId = this.userProfile.$key;
       this.message.userFromProfile.first_name = this.userProfile.first_name;
       this.message.userFromProfile.last_name = this.userProfile.last_name;

       this.message.userToId = this.guestProfile.$key;
       this.message.userToProfile.first_name = this.guestProfile.first_name;
       this.message.userToProfile.last_name = this.guestProfile.last_name

       this.messageList = this.chat.getPrivateChats(this.message.userToId);
    //    this.messageList.subscribe(data=>{
    //        console.log(data);
    //    })

    }

    async submitChat(chatText:string){
         
        try{

            this.message.content = chatText;
            this.message.dateTime = new Date().getTime();
         
            if(this.message.content){
                    await this.chat.submitPrivateChat(this.message);
            }

        }catch(e){
            console.error(e);
        }

      
    }


    dontGiveUp(des){

        //console.log(des);
        this.thisDialogRef.close(des);
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