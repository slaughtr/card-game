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
    this.user.subscribe(user => {
      if (user) {
        var ref = firebase.database().ref('/users');
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
