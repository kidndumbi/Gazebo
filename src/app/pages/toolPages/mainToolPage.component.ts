import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PrivateChatModalComponent } from '../../modals/privateChatModal.component';


@Component({
    selector: 'MainToolPage',
    templateUrl: 'MainToolPage.component.html'
})

export class MainToolPageComponent implements OnInit {
    constructor(public dialog: MdDialog) { }



    ///modal
    launchModal(){

         let dialogRef = this.dialog.open(PrivateChatModalComponent, {
             width: '500px',
             height: '600px',
             data: {yams: 'i am super yams', coco: 'i like coconut'}
         });

         dialogRef.afterClosed().subscribe(result=>{
              console.log(result);
         });

    }


    ngOnInit() { }
}