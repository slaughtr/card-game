import { Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }

  loginWithGoogle(){
    return this.af.auth.login({
      provider: AuthProviders.google,
      method: AuthMethods.Popup
    });
  }

  logoutWithGoogle(){
    return this.af.auth.logout();
  }

}
