import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'send-message-box',
    templateUrl: 'sendMessageBox.component.html',
    styleUrls: ['sendMessageBox.component.css']
})

export class SendMessageBoxComponent implements OnInit {

        @Output() sendChatText = new EventEmitter;
         chatText: string;
         //textCount:number;

    constructor() {

        // this.textCount = this.chatText.count();
     }

        


        submitChat(){

        if(this.chatText){
            this.sendChatText.emit(this.chatText); 
            this.chatText = "";
            
        } 
     }

    ngOnInit() { }
}