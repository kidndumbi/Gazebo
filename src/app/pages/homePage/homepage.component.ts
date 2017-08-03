import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';


@Component({
    selector: 'homePage',
    templateUrl: 'homePage.component.html'
})

export class HomePageComponent implements OnInit {
    constructor(private fire: FirebaseService) { }



    ngOnInit() { }
}