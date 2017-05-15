import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  logStatus = null;
  loginObj;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login(){
    this.authService.loginWithGoogle();
    // loginObj = this.authService.loginWithGoogle();
    // console.log("Login obj"+loginObj);
  }
}
