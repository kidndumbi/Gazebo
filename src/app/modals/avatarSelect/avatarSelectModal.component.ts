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
                {src: "https://png.icons8.com/basketball/color/96", title: "Basketball" },
                { src:"https://png.icons8.com/hummingbird/color/96", title:"Hummingbird"},
                { src:"https://png.icons8.com/puffin-bird/color/96", title:"Puffin Bird"},
                { src:"https://png.icons8.com/unicorn/office/96", title:"Unicorn"},
                { src:"https://png.icons8.com/brutus/color/96", title:"Brutus"},
                { src:"https://png.icons8.com/brave/color/96", title:"Brave"},
                { src:"https://png.icons8.com/woody-woodpecker/color/96", title:"Woody Woodpecker"},
                { src:"https://png.icons8.com/stick-fighting/color/96", title:"Stick Fighting"},
                { src:"https://png.icons8.com/detective/color/96", title:"Detective"},
                { src:"https://png.icons8.com/edvard-munch/color/96", title:"Edvard Munch"},
                { src:"https://png.icons8.com/wine-bottle/color/96", title:"wine"},
                { src:"https://png.icons8.com/paper-money/color/96", title:"Paper"},
                { src:"https://png.icons8.com/three-leaf-clover/color/96", title:"Three Leaf Clover"}
                ];
           

          }

    
     selectAvartar(avatar){

        //console.log(des);
        this.thisDialogRef.close(avatar);
    }



    ngOnInit() { }
}