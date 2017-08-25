import { Observable } from 'rxjs/Observable';
import { profile } from './../../models/profile.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../services/firebase/chat.service';

@Component({
    selector: 'chat-history',
    templateUrl: 'chatHistory.component.html',
    styleUrls: ['chatHistory.component.css']
})

export class ChatHistoryComponent implements OnInit {

    chatsLists: Observable<profile[]>;
     @Output() selectedChat: EventEmitter<profile>;
     newMessage:boolean = false;

    constructor(private chatsService: ChatService) { 
        
        this.selectedChat = new EventEmitter();
        this.chatsLists = chatsService.getChatHistory();

        // this.chatsList.subscribe(guestdata=>{

        //     console.log(guestdata);
        //      this.chatsService.getPrivateChats(guestdata.$key)
        // })

        
    }

    selectChat(user: profile){
       
        this.selectedChat.emit(user);


    }

    ngOnInit() { }
}