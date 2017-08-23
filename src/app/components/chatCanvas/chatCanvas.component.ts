import { Observable } from 'rxjs/Observable';
import { profile } from './../../models/profile.model';
import { Component, OnInit, Input, EventEmitter, Output,OnDestroy, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import {  FirebaseListObservable } from 'angularfire2/database';
import { User } from 'firebase/app';


@Component({
    selector: 'chatCanvas',
    templateUrl: 'chatCanvas.component.html',
    styleUrls: ['chatCanvas.component.css']
})

export class ChatCanvasComponent implements OnInit, AfterViewChecked {

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    disableScrollDown = false

    @Input() Chats: FirebaseListObservable<any[]>;
    @Input() PrivateChats: Observable<any[]>;
    @Input() authenticatedUser: profile;
    @Input() isPublic: boolean;
    // @Output() sendChatText = new EventEmitter;
    
   


    constructor() {
     }




    private scrollToBottom(): void {
        if (this.disableScrollDown) {
            return
        }
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

     private onScroll() {
        let element = this.myScrollContainer.nativeElement
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false
        } else {
            this.disableScrollDown = true
        }
    }

    ngAfterViewChecked() {        
        this.scrollToBottom();       
    }

    ngOnInit() {
        //this.scrollToBottom();  
     }
}