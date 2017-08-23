import { profile } from './../../models/profile.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../firebase/auth.service';
import { database } from 'firebase';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FirebaseService {

  user: Observable < firebase.User > ;
  userId: string;
  email: string;
  items: FirebaseListObservable < any[] > ;
  profileObject: FirebaseObjectObservable<profile>

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private auth: AuthService) {


 

    // this.items = db.list('/Users/', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });

    // this.db.list('/myLists/').push({
    //     title: "Boom!",

    //    });

    

    this.user = this.afAuth.authState;

    this.user.subscribe(data =>{
        this.userId = data.uid;
        this.email = data.email;
    })


  }


  async saveProfile(profile: profile){

    profile.email = this.email;
     
     this.profileObject = this.db.object(`/profiles/${this.userId}`)

     try {
         await  this.profileObject.set(profile);
         return true;
     }
     catch(e){
          console.error(e);
          return false;
     }
 

  }

  // getProfile(user: firebase.User): Observable < profile> {

  //     return this.db.object(`/profiles/${user.uid}`)
  // }


    getAuthenticatedUserProfile(){
        
        return this.auth.getAuthenticatedUser()
        .map(user => user.uid)
        .mergeMap(authId => this.db.object(`/profiles/${authId}`) )
        .take(1);

    }


    setUsersOnline(profile: profile){
    
        const ref = database().ref(`online-users/${profile.$key}`);

        try {
          ref.update({...profile});
          ref.onDisconnect().remove();
        }
        catch(e){
            console.log(e);
        }

    }

    getOnlineUsers(): FirebaseListObservable < profile[] >{

         return this.db.list('online-users');
    }



//   getAllLists(): Observable < any[] > {
//     return this.db.list('/myLists/');
//   }
//   getListDetailsById(id: string): Observable < any > {
//     return this.db.list('/myLists/' + id);
//   }

  // createListTitle( title: string) : string {

  //     if(title){
  //       let r = this.db.list('/myLists/').push({
  //       title: title,

  //      });
  
  //    return r.key;

  //     }

  // }

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


