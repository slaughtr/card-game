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
    this.user.subscribe(user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        var ref = firebase.database().ref('/game/users');
        ref.once('value', (snapshot) => {
          if (!snapshot.hasChild(user.uid)) {
            var newUser = {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            }
            ref.child(user.uid).set(newUser);
          }
        });
      }
    })
  }

  //keep the following example for reference. don't delete. this version returns a promise to whatever component that calls it. Use "then" to run code after sign in is fully complete.
  // loginWithGoogle() {
  //   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  logoutWithGoogle() {
    localStorage.clear();
    this.afAuth.auth.signOut();
  }

  getCurrentUser(){
    return this.user;
  }

  isLoggedIn(){
    return this.user;
  }

}
