import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import { profile } from '../../models/profile.model';

@Injectable()
export class FirebaseService {

  user: Observable < firebase.User > ;
  items: FirebaseListObservable < any[] > ;
  profileObject: FirebaseObjectObservable<profile>

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {


 

    // this.items = db.list('/Users/', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });

    this.db.list('/myLists/').push({
        title: "Boom!",

       });

    

    this.user = this.afAuth.authState;


  }


  async saveProfile(user: firebase.User, profile: profile){
     
     this.profileObject = this.db.object(`/profiles/${user.uid}`)

     try {
         await  this.profileObject.set(profile);
         return true;
     }
     catch(e){
          console.error(e);
          return false;
     }
 

  }

//   getAllLists(): Observable < any[] > {

//     return this.db.list('/myLists/');

//   }

//   getListDetailsById(id: string): Observable < any > {

//     return this.db.list('/myLists/' + id);

//   }

  createListTitle( title: string) : string {

      if(title){
        let r = this.db.list('/myLists/').push({
        title: title,

       });
  
     return r.key;

      }

  }

//   createListItem( itemDescription: string, id:string) : string {

//       if(itemDescription){
//         let r = this.db.list('/myLists/' + id + '/listItems').push({
//         item: itemDescription,

//        });
  
//         return r.key;

//       }

//   }

//   deleteList(key:string){
//       return this.db.list('/myLists/' + key).remove();
//   }

//   deleteListItem(listKey:string, itemKey: string){
//       return this.db.list('/myLists/' + listKey + '/listItems/' + itemKey).remove();
//   }


  

  

//   getquizzes() {
//     return this.db.list('/Quizes/', {
//       query: {
//         orderByChild: 'owner',
//         equalTo: "Biology test 1",

//       }
//     });
//   }


}


