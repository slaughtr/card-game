import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';



@Injectable ()

export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService){}
  canActivate() {
   console.log("Router Guard active");
   return this.authService.isLoggedIn();
  }

}
