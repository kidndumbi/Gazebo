import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/firebase/auth.service';
import { AngularFireAuth  } from 'angularfire2/auth';
import {Router} from "@angular/router";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Injectable()
export class FirebaseGuard implements CanActivate {
    constructor(private auth: AuthService, public afAuth: AngularFireAuth, private router: Router) { }

    canActivate():Observable<boolean> {
   
          return this.auth.getAuthenticatedUser()
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
            if (!authenticated) {
                this.router.navigate(['/login']);
            }
            });

    }
}