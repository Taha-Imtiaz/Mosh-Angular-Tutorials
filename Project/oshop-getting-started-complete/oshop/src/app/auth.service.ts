import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; 
import { Observable } from 'rxjs/Observable';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/of'



@Injectable()
export class AuthService {

  // define an observable of type firebase.User
  // convention to add $ to observable
user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth , private userService: UserService, private route: ActivatedRoute) { 

    // determining auth state of the current User
    // afAuth.authState.subscribe((user) => this.user = user);
    this.user$ = afAuth.authState
  }

  login() {
// store returnUrl property in localStorage
// with activatedRoute we get the current route and extract query parameter (returnUrl)
let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || "/"
console.log(returnUrl);

// store returnUrl in localStorage
localStorage.setItem('returnUrl', returnUrl)

 // use auth property afauth and signInWithRedirect (oauth provider) to signIn with google
 this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  
  }

  logout() {
    // logout the currentUser
    this.afAuth.auth.signOut()

  }

  // getting app user from firebase db
  get appUser$() : Observable<AppUser> {
// map firebase User object to firebase database object
return this.user$.switchMap((user) => {
  if(user) {
    return this.userService.get(user.uid)
  }
  else {
    // return Observable of null
    return Observable.of(null)
  }
})
  }
}
