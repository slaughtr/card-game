import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable ()

export class AuthGuard implements CanActivate {
  user: object = JSON.parse(localStorage.getItem('user'));
  constructor (private authService: AuthService, private router: Router){}

  canActivate(){
      if (this.user !== null){
        return true;
      } else {
        this.router.navigate(['']);
    }
  }
}
