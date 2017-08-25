import { Component, OnInit, Inject  } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import { avatar } from '../../models/avatars.model';

@Component({
    selector: 'avatarSelectModal',
    templateUrl: 'avatarSelectModal.component.html',
    styleUrls: ['avatarSelectModal.component.css']
})

export class AvatarSelectModalComponent implements OnInit {
 
    avatars: avatar[];
     
 


    constructor(public thisDialogRef: MdDialogRef<AvatarSelectModalComponent> ,@Inject(MD_DIALOG_DATA) public data: any) {
             

           this.avatars =[
                {src: "https://png.icons8.com/mongrol/color/96", title: "Mongrol"},
                {src: "https://png.icons8.com/black-blood/ultraviolet/96" , title: "Black Blood"},
                {src: "https://png.icons8.com/year-of-dragon/color/96" , title: "Year of Dragon"},
                {src: "https://png.icons8.com/cameroon/color/96", title: "Cameroon" },
                {src: "https://png.icons8.com/usa/color/96", title: "USA" },
                {src: "https://png.icons8.com/canada/color/96", title: "Canada" },
                {src: "https://png.icons8.com/donald-trump/color/96", title: "Donald Trump" },
                {src: "https://png.icons8.com/falcon/ultraviolet/96", title: "Falcon" },
                {src: "https://png.icons8.com/basketball/color/96", title: "Basketball" }
                ];
           

          }

    
     selectAvartar(avatar){

        //console.log(des);
        this.thisDialogRef.close(avatar);
    }



    ngOnInit() { }
}