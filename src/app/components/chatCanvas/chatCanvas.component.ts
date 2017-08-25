import { Observable } from 'rxjs/Observable';
import { profile } from './../../models/profile.model';
import { Component, OnInit, Input, EventEmitter, Output,OnDestroy,
     AfterViewChecked, ElementRef, ViewChild, ViewChildren} from '@angular/core';

import {  FirebaseListObservable } from 'angularfire2/database';
import { User } from 'firebase/app';


@Component({
    selector: 'chatCanvas',
    templateUrl: 'chatCanvas.component.html',
    styleUrls: ['chatCanvas.component.css']
})

export class ChatCanvasComponent implements OnInit {


    @Input() Chats: FirebaseListObservable<any[]>;
    @Input() PrivateChats: Observable<any[]>;
    @Input() authenticatedUser: profile;
    @Input() isPublic: boolean;
    @Input() height:string;
    // @Output() sendChatText = new EventEmitter;

    constructor() {
     }

   
 




    ngOnInit() {
        //this.scrollToBottom();  
     }
}