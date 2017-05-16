import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';



@Injectable ()
export class AuthGuard implements CanActivate {
userState: boolean;
constructor (private authService: AuthService){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   console.log("Router Guard active");
   return true;
   }

}
