import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AppUser } from './models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    // save user in db
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid:string): FirebaseObjectObservable<AppUser> {
    // get / reads user from firebase database
    return this.db.object(`/users/${uid}`)
  }
}
