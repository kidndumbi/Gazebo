import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PrivateChatModalComponent } from '../../modals/privateChatModal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'MainToolPage',
    templateUrl: 'MainToolPage.component.html',
    styleUrls: ['MainToolPage.component.css'],
    animations: [
        trigger('clickedState', [
            state('default', style({
                backgroundColor: 'green',
                width: '100px',
                height: '100px'
            })),
              state('clicked', style({
                backgroundColor: 'blue',
                width: '300px',
                height: '50px'
            })),
             transition('default => clicked', animate('100ms ease-in')),
             transition('clicked => default', animate('100ms ease-out'))
        ])
    ]
})

export class MainToolPageComponent implements OnInit {

    
    clickInfo:string;
    

    constructor(public dialog: MdDialog) { 

        this.clickInfo = 'default';

    }



    ///modal
    launchModal(){

         let dialogRef = this.dialog.open(PrivateChatModalComponent, {
             width: '500px',
             height: '600px',
             data: {yams: 'i am super yams', coco: 'i like coconut'}
         });

         dialogRef.afterClosed().subscribe(result=>{
            
         });

    }





    ngOnInit() { }
}