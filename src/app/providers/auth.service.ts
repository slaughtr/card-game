import {Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  loggedIn: boolean;
  constructor(public afAuth: AngularFireAuth, public route: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result =>{
        this.route.navigate(['dashboard']);
    });
  }

  //keep the following example for reference. don't delete. this version returns a promise to whatever component that calls it. Use "then" to run code after sign in is fully complete.
  // loginWithGoogle() {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  logoutWithGoogle() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser(){
    return this.user;
  }

}
