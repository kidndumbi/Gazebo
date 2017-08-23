import { Component, OnInit, Inject  } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'avatarSelectModal',
    templateUrl: 'avatarSelectModal.component.html',
    styleUrls: ['avatarSelectModal.component.css']
})

export class AvatarSelectModalComponent implements OnInit {

     
    avatars:{ src: string, title: string }[]=[
      {src: "https://png.icons8.com/mongrol/color/96", title: "Mongrol"},
      {src: "https://png.icons8.com/black-blood/ultraviolet/96" , title: "Black Blood"},
      {src: "https://png.icons8.com/year-of-dragon/color/96" , title: "Year of Dragon"}
    ];


    constructor(public thisDialogRef: MdDialogRef<AvatarSelectModalComponent> ,@Inject(MD_DIALOG_DATA) public data: any) {


     }

    
     selectAvartar(avatar){

        //console.log(des);
        this.thisDialogRef.close(avatar);
    }



    ngOnInit() { }
}