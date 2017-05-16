import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';



@Injectable ()

export class AuthGuard implements CanActivate {
 loggedIn: boolean;
  constructor (private authService: AuthService, private router: Router){}
  canActivate() {
   console.log("Router Guard active");
   this.loggedIn = this.authService.isLoggedIn();
   if ( this.loggedIn=== true ){
     return this.loggedIn;
   } else {
     this.router.navigate(['']);
   }
  }

}
