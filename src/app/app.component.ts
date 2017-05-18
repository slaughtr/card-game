import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Carrrd Game';
  user;


  constructor (private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.authService.getCurrentUser().subscribe(user=>{
      this.user = user;
      console.log(user);
    })
  }

  login(){
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logoutWithGoogle();
    this.router.navigate(['']);
  }

  goToPlayerDetailPage(currentPlayer) {
    this.router.navigate(['player', currentPlayer.$key])
  }
}
