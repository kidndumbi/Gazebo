import { ChatService } from './../../../services/firebase/chat.service';
import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { profile } from '../../../models/profile.model';


@Component({
    selector: 'chatHistoryItem',
    templateUrl: 'chatHistoryItem.component.html',
    styleUrls: ['chatHistoryItem.component.css']
})

export class ChatHistoryItemComponent implements OnInit {


  @Input() chat: any;
  newMessage:boolean=false;

    

    constructor(private chatsService: ChatService) {

    }

    ngOnInit() {
            // this.chatsService.getPrivateChats(this.chat.$key).subscribe(chats=>{

            //     console.log(this.newMessage);
                      
            //     console.log(chats);
            //     this.newMessage = true;
            //     console.log(this.newMessage);

            //  });
     }
}