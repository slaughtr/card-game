import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable ()

export class AuthGuard implements CanActivate {

constructor (private authService: AuthService, private route: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.getCurrentUser().map(result =>{
      if (result === null){
        this.route.navigate(['']);
        return false;
      } else {
        return true;
      }
    }).first();
  }
}
