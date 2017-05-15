import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [AuthService]
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logoutWithGoogle();
      this.router.navigate(['login']);
  }

}
