import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/firebase/chat.service';

@Component({
    selector: 'chat-history',
    templateUrl: 'chatHistory.component.html'
})

export class ChatHistoryComponent implements OnInit {

    chatsList: Array<any[]>;

    constructor(private chatsService: ChatService) { 

        chatsService.getChatHistory().subscribe(chats => {
            console.log(chats);
        })
    }

    selectChat(userId){

    }

    ngOnInit() { }
}