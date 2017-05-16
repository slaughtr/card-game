import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  loggedIn: boolean = false;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.loggedIn = true;
  }

  logoutWithGoogle() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
  }

  getCurrentUser(){
    return this.user;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

}
