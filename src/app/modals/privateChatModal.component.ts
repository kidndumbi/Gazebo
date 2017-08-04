import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'PrivateChatModal',
    templateUrl: 'PrivateChatModal.component.html'
})

export class PrivateChatModalComponent implements OnInit {

     yams: string="";
    coco: string="";

    constructor(public thisDialogRef: MdDialogRef<PrivateChatModalComponent> , @Inject(MD_DIALOG_DATA) public data: any) { 
     

     this.yams = data.yams;
     this.coco = data.coco;
   

    }
    
   

    dontGiveUp(des){

        //console.log(des);
        this.thisDialogRef.close(des);
    }

    ngOnInit() { }
}